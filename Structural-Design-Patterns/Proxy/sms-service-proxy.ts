import { ConcreteSMSService } from './concrete-sms-service';
import { SMSService } from './sms-service';
import { Customer } from './customer';

export class SMSServiceProxy {
  private smsService!: SMSService;

  private customers: Customer[] = [];

  private findCustomer(customerId: number): Customer | undefined {
    return this.customers.find((customer) => {
      return customer.id === customerId;
    });
  }

  public sendSMS({
    customerId,
    mobile,
    message,
  }: {
    customerId: number;
    mobile: string;
    message: string;
  }): string {
    if (!this.smsService) this.smsService = new ConcreteSMSService();

    const customer = this.findCustomer(customerId);

    if (!customer) {
      this.customers.push({ id: customerId, sendCount: 1 });
      return this.smsService!.SendSms(customerId, mobile, message);
    }

    if (customer!.sendCount >= 2) return `failure to sent message!`;

    customer!.sendCount++;
    return this.smsService!.SendSms(customerId, mobile, message);
  }
}
