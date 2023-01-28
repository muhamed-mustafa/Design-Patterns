import { SMSService } from './sms-service';

export class ConcreteSMSService extends SMSService {
  SendSms(customerId: number, mobile: string, message: string): string {
    return `CustomerId: ${customerId}, sms ${message} sent to ${mobile}`;
  }
}
