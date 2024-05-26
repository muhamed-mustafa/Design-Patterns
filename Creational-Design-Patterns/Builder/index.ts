import { ConcreteBuilder } from "./ConcreteBuilder";
import { Director } from "./Director";

function clientCode(director: Director) {
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log("Standard basic product:");
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log("Standard full featured product:");
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  console.log("Custom product:");
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);

/** 
 * Output.txt: Execution result
    Standard basic product:
    Product parts: PartA1

    Standard full featured product:
    Product parts: PartA1, PartB1, PartC1

    Custom product:
    Product parts: PartA1, PartC1
*/
