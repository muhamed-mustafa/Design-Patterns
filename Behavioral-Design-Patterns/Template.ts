abstract class DocumentPrinter {
  printHeader(): void {
    console.log("Default Header");
  }

  abstract printBody(): void;

  printFooter(): void {
    console.log("Default Footer");
  }

  print(): void {
    this.printHeader();
    this.printBody();
    this.printFooter();
  }
}

class Reports extends DocumentPrinter {
  printBody(): void {
    console.log("Report Body");
  }
}

class Invoice extends DocumentPrinter {
  printBody(): void {
    console.log("Invoice Body");
  }
}

const report = new Reports();
report.print();

const invoice = new Invoice();
invoice.print();
