"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XmlDataProvider_1 = require("./XmlDataProvider");
const XmlToJsonAdapter_1 = require("./XmlToJsonAdapter");
const xmlDataProvider = new XmlDataProvider_1.XmlDataProvider();
const adapter = new XmlToJsonAdapter_1.XmlToJsonAdapter(xmlDataProvider);
adapter.consumeData();
