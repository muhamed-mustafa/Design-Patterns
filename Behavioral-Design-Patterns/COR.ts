interface Approver {
  setNext(approver: Approver): Approver;
  approve(amount: number): string | null;
}

abstract class AbstractApprover implements Approver {
  private nextApprover: Approver | null = null;

  public setNext(approver: Approver): Approver {
    this.nextApprover = approver;
    return approver;
  }

  public approve(amount: number): string | null {
    if (this.nextApprover) {
      return this.nextApprover.approve(amount);
    }

    return null;
  }
}

class TeamLeader extends AbstractApprover {
  public approve(amount: number): string | null {
    if (amount < 1000) {
      return `Team Leader: I can approve the purchase of $${amount}.`;
    }
    return super.approve(amount);
  }
}

class DepartmentHead extends AbstractApprover {
  public approve(amount: number): string | null {
    if (amount < 5000) {
      return `Department Head: I can approve the purchase of $${amount}.`;
    }

    return super.approve(amount);
  }
}

class CEO extends AbstractApprover {
  public approve(amount: number): string | null {
    if (amount >= 6000) {
      return `CEO: I can approve the purchase of $${amount}.`;
    }

    return super.approve(amount);
  }
}

function clientCode(approver: Approver) {
  const purchaseAmounts = [500, 2000, 5500, 7000];

  for (const amount of purchaseAmounts) {
    console.log(`Client: Who can approve the purchase of $${amount}?`);

    const result = approver.approve(amount);
    if (result) {
      console.log(`  ${result}`);
    } else {
      console.log(`  No one can approve the purchase of $${amount}.`);
    }
  }
}

// The client code can set up the chain:
const teamLeader = new TeamLeader();
const departmentHead = new DepartmentHead();
const ceo = new CEO();

teamLeader.setNext(departmentHead).setNext(ceo);

// The client should be able to send a request to any approver, not just the first one in the chain.
console.log("Chain: Team Leader > Department Head > CEO\n");
clientCode(teamLeader);
console.log("");

console.log("SubChain: Department Head > CEO\n");
clientCode(departmentHead);
