import { IBank } from './IBank';

export interface IBankFactory {
  getBank(bankCode: string): IBank;
}
