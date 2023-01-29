import { ConcreteSMSService } from '../Proxy/concrete-sms-service';
import { NotificationEmailDecorator } from './notification-email-decorator';

const smsService = new ConcreteSMSService();
const emailDecorator = new NotificationEmailDecorator();

emailDecorator.setService(smsService);
console.log(emailDecorator.SendSms(1, '0123456789', 'message 1'));
