import { AbstractDecorator } from './abstract-decorator';

export class NotificationEmailDecorator extends AbstractDecorator {
  public SMSSendNotification(customerId: number, message: string): string {
    return `Sms ${message}, send to ${customerId}, at ${new Date().toLocaleString()}`;
  }

  public SendSms(customerId: number, mobile: string, message: string): string {
    return `${this.notificationService.SendSms(customerId, mobile, message)}
    ${this.SMSSendNotification(customerId, message)}}`;
  }
}
