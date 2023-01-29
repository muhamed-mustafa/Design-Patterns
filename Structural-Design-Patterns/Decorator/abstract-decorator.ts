import { SMSService } from '../Proxy/sms-service';

export abstract class AbstractDecorator extends SMSService {
  protected notificationService: SMSService;

  public setService(service: SMSService) {
    this.notificationService = service;
  }

  public SendSms(customerId: number, mobile: string, message: string): string {
    if (!this.notificationService)
      return 'Notification service not initialized!';

    return this.notificationService.SendSms(customerId, mobile, message);
  }
}
