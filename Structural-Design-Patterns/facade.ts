const accounts = (function () {
  const accounts: { accountId: number; name: string; amount: number }[] = [];

return {
  getAccountByName(name: string) {
    return accounts.find((account) => account.name === name);
  },

    createAccount(name: string, openingBalance: number) {
      const account = {
        accountId: accounts.length + 1,
        name,
        amount: openingBalance,
      };

      accounts.push(account);
      return account;
    },
  };
})();

const loansDepartment = (function () {
  const loans: { accountId: number; amount: number }[] = [];

  return {
    creditCheck(accountId: number) {
      const existingLoan = loans.filter((loan) => loan.accountId === accountId);
      console.log({ existingLoan });
      return existingLoan.length > 0;
    },
    createLoan(accountId: number, amount: number) {
      const loan = { accountId, amount };
      loans.push(loan);
      return loan;
    },
  };
})();

/*
 * Build a facade that can create an account and take a loan in a single function
 */

const bankFacade = (function () {
  return {
    createLoan(name: string, amount: number) {
      let account = accounts.getAccountByName(name);
      if (account && loansDepartment.creditCheck(account.accountId)) {
        throw new Error('Your credit sucks');
      }

      if (!account) {
        account = accounts.createAccount(name, 0);
        console.log('Created new account', account);
      }

      return loansDepartment.createLoan(account.accountId, amount);
    },
  };
})();

console.log(bankFacade.createLoan('mo', 200));
console.log(bankFacade.createLoan('adam', 800));
