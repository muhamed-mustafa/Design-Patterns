import { BankFactory } from './bankFactory';

const bankFactory = new BankFactory();

const cardNumber = '47852413';
const bankCode = cardNumber.slice(0, 4);

const bank = bankFactory.getBank(bankCode);
console.log(bank.withdraw()); // "Your request is handling by BankA"

// const cardNumber = '14753158';
// const bankCode = cardNumber.slice(0, 4);

// const bank = bankFactory.getBank(bankCode);
// console.log(bank.withdraw()); // "Your request is handling by BankB"
