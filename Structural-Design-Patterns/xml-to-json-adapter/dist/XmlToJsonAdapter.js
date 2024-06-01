"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlToJsonAdapter = void 0;
const xml2js_1 = require("xml2js");
class XmlToJsonAdapter {
    constructor(xmlDataProvider) {
        this.xmlDataProvider = xmlDataProvider;
    }
    consumeData() {
        return __awaiter(this, void 0, void 0, function* () {
            const xmlData = this.xmlDataProvider.getData();
            const jsonData = yield this.convertXmlToJson(xmlData);
            console.log(`Consuming JSON Data: ${JSON.stringify(jsonData)}`);
        });
    }
    convertXmlToJson(xml) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, xml2js_1.parseStringPromise)(xml);
        });
    }
}
exports.XmlToJsonAdapter = XmlToJsonAdapter;
