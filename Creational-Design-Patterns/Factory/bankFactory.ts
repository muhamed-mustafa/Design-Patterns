import { IBank } from './IBank';
import { IBankFactory } from './IBankFactory';
import { BankA } from './BankA';
import { BankB } from './bankB';

export class BankFactory implements IBankFactory {
  getBank(bankCode: string): IBank {
    switch (bankCode) {
      case '4785':
        return new BankA();

      case '1475':
        return new BankB();

      default:
        return 'Invalid bankCode...' as any;
    }
  }
}
