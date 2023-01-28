import { SMSServiceProxy } from './sms-service-proxy';

const proxy = new SMSServiceProxy();

console.log(
  proxy.sendSMS({ customerId: 1, mobile: '0123456789', message: 'message 1' })
);

console.log(
  proxy.sendSMS({ customerId: 1, mobile: '0123456789', message: 'message 2' })
);

console.log(
  proxy.sendSMS({ customerId: 1, mobile: '0123456789', message: 'message 3' })
); // failure to sent message!;
