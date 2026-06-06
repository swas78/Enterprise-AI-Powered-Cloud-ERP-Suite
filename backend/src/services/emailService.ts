import nodemailer from 'nodemailer';

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private isInitialized = false;

  async initialize() {
    if (this.isInitialized) return;

    try {
      // Create a test account on Ethereal
      const testAccount = await nodemailer.createTestAccount();

      this.transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });

      this.isInitialized = true;
      console.log('✅ Email service initialized (Ethereal test account)');
      console.log(`✉️  Ethereal User: ${testAccount.user}`);
    } catch (error) {
      console.error('❌ Failed to initialize email service:', error);
    }
  }

  async sendOtpEmail(to: string, otp: string) {
    if (!this.isInitialized || !this.transporter) {
      await this.initialize();
    }

    try {
      const info = await this.transporter!.sendMail({
        from: '"Amdox ERP" <noreply@amdox-erp.local>', // sender address
        to, // list of receivers
        subject: 'Your Login Verification Code', // Subject line
        text: `Your Amdox ERP verification code is: ${otp}\n\nThis code will expire in 5 minutes.`, // plain text body
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #4f46e5;">Amdox ERP Login</h2>
            <p>Your verification code is:</p>
            <h1 style="font-size: 36px; letter-spacing: 4px; color: #111827; background: #f3f4f6; padding: 12px; border-radius: 6px; text-align: center;">${otp}</h1>
            <p style="color: #6b7280; font-size: 14px;">This code will expire in 5 minutes. If you did not request this, please ignore this email.</p>
          </div>
        `, // html body
      });

      console.log('✉️  OTP Email sent! Message ID:', info.messageId);
      console.log('🔗 Preview URL:', nodemailer.getTestMessageUrl(info));
      
      return true;
    } catch (error) {
      console.error('❌ Failed to send OTP email:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();
export default emailService;
