import { BaseRepository } from '../../repositories/baseRepository';
import { Widget, IWidget } from '../../models/dashboard/Widget';

const widgetRepo = new BaseRepository<IWidget>(Widget);

export class WidgetService {
  static async getWidgetsByDashboard(dashboardId: string, tenantId: string): Promise<IWidget[]> {
    return widgetRepo.find({ dashboardId, tenantId, isVisible: true });
  }

  static async getWidgetById(id: string, tenantId: string): Promise<IWidget | null> {
    return widgetRepo.findOne({ _id: id, tenantId });
  }

  static async createWidget(data: Partial<IWidget>): Promise<IWidget> {
    return widgetRepo.create(data);
  }

  static async updateWidget(id: string, tenantId: string, data: Partial<IWidget>): Promise<IWidget | null> {
    return widgetRepo.update({ _id: id, tenantId }, { $set: data });
  }

  static async deleteWidget(id: string, tenantId: string): Promise<boolean> {
    const result = await widgetRepo.delete({ _id: id, tenantId });
    return result.deletedCount > 0;
  }

  static async updateWidgetPositions(
    updates: { id: string; position: { x: number; y: number; w: number; h: number } }[],
    tenantId: string
  ): Promise<void> {
    await Promise.all(
      updates.map(({ id, position }) =>
        widgetRepo.update({ _id: id, tenantId }, { $set: { position } })
      )
    );
  }

  static async toggleWidgetVisibility(id: string, tenantId: string): Promise<IWidget | null> {
    const widget = await this.getWidgetById(id, tenantId);
    if (!widget) throw new Error('Widget not found.');
    return widgetRepo.update({ _id: id, tenantId }, { $set: { isVisible: !widget.isVisible } });
  }

  /** Refresh widget data — calls the configured dataSource */
  static async getWidgetData(id: string, tenantId: string): Promise<any> {
    const widget = await this.getWidgetById(id, tenantId);
    if (!widget) throw new Error('Widget not found.');
    // In production, this would call the actual dataSource service
    return { widgetId: id, data: [], lastRefreshed: new Date() };
  }
}

export default WidgetService;
