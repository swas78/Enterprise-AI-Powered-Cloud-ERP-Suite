import { BaseRepository } from '../../repositories/baseRepository';
import { Report, IReport } from '../../models/dashboard/Report';
import { ExportRequestDTO, ExportFormat } from '../../types/api';

const reportRepo = new BaseRepository<IReport>(Report);

export class ReportService {
  static async getAllReports(tenantId: string): Promise<IReport[]> {
    return reportRepo.find({ tenantId });
  }

  static async getReportById(id: string, tenantId: string): Promise<IReport | null> {
    return reportRepo.findOne({ _id: id, tenantId });
  }

  static async createReport(data: Partial<IReport>): Promise<IReport> {
    return reportRepo.create({ ...data, status: 'pending' });
  }

  static async deleteReport(id: string, tenantId: string): Promise<boolean> {
    const result = await reportRepo.delete({ _id: id, tenantId });
    return result.deletedCount > 0;
  }

  /** Trigger async report generation (enqueues to BullMQ) */
  static async requestReportGeneration(dto: ExportRequestDTO): Promise<IReport> {
    const report = await this.createReport({
      name: `${dto.module} Export - ${new Date().toISOString()}`,
      type: dto.module as any,
      format: dto.format as ExportFormat,
      filters: dto.filters ?? {},
      columns: dto.columns,
      tenantId: dto.tenantId as any,
      createdBy: dto.requestedBy as any,
      status: 'pending',
    });

    // Actual BullMQ job is triggered from the controller/queue layer
    return report;
  }

  /** Mark a report as generated */
  static async markReportReady(
    id: string,
    fileUrl: string,
    fileSize: number,
    generationTimeMs: number
  ): Promise<IReport | null> {
    return reportRepo.update(
      { _id: id },
      {
        $set: {
          status: 'ready',
          fileUrl,
          fileSize,
          generationTimeMs,
          lastRunAt: new Date(),
        },
      }
    );
  }

  /** Mark a report as failed */
  static async markReportFailed(id: string): Promise<IReport | null> {
    return reportRepo.update({ _id: id }, { $set: { status: 'failed' } });
  }

  /** Get all scheduled reports due for generation */
  static async getDueScheduledReports(): Promise<IReport[]> {
    return reportRepo.find({
      schedule: { $ne: 'once' },
      nextRunAt: { $lte: new Date() },
      status: { $nin: ['generating'] },
    });
  }
}

export default ReportService;
