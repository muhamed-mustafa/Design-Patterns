import { XmlDataProvider } from "./XmlDataProvider";
import { JsonDataConsumer } from "./JsonDataConsumer";
import { parseStringPromise } from "xml2js";

export class XmlToJsonAdapter implements JsonDataConsumer {
  constructor(private xmlDataProvider: XmlDataProvider) {}

  public async consumeData(): Promise<void> {
    const xmlData = this.xmlDataProvider.getData();
    const jsonData = await this.convertXmlToJson(xmlData);
    console.log(`Consuming JSON Data: ${JSON.stringify(jsonData, null, 2)}`);
  }

  private async convertXmlToJson(xml: string) {
    return await parseStringPromise(xml);
  }
}
