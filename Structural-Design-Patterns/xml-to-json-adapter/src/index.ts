import { XmlDataProvider } from "./XmlDataProvider";
import { XmlToJsonAdapter } from "./XmlToJsonAdapter";

const xmlDataProvider = new XmlDataProvider();
const adapter = new XmlToJsonAdapter(xmlDataProvider);

adapter.consumeData();
