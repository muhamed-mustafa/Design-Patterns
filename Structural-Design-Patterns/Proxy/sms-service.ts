export abstract class SMSService {
  public abstract SendSms(
    customerId: number,
    mobile: string,
    message: string
  ): string;
}
