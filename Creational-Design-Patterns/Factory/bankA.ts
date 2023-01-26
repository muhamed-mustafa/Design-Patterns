import { IBank } from './IBank';

export class BankA implements IBank {
  withdraw(): string {
    return `Your request is handling by BankA`;
  }
}
