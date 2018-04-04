import { XmlUtil } from "./xml-util";
import { NUnitXmlUtil } from "./nunit-xml-util";
import { JUnitXmlUtil } from "./junit-xml-util";

export class XmlUtilBuilder {

  static buildXmlUtil(artifacts: { [propertyName: string]: string }): XmlUtil {
    if (artifacts["nunit_xml_zip"]) {
      return new NUnitXmlUtil();
    } else if (artifacts["junit_xml_zip"]) {
      return new JUnitXmlUtil();
    } else {
      throw new Error("Unexpected reports type");
    }
  }
}
