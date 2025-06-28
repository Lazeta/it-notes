import { ConnectMethod } from "./ConnectMethod/ConnectMethod";
import { HTTPHeaders } from "./HTTPHeaders/HTTPHeaders";
import { HttpProtocols } from "./HttpProtocols/HttpProtocols";
import { IdempotentHTTPMethods } from "./IdempotentHTTPMethods/IdempotentHTTPMethods";
import { ProtocolTCPAndUDP } from "./ProtocolTCPAndUDP/ProtocolTCPAndUDP";
import { HTTPBase } from "./HTTPBase/HTTPBase";
import { GETandPOST } from "./GETandPOST/GETandPOST";
import { PATCHandPUT } from "./PATCHandPUT/PATCHandPUT";
import { Options } from "./Options/Options";
import { ResponseCodes } from "./ResponseCodes/ResponseCodes";
import { RequestResponse } from "./RequestResponse/RequestResponse";

export const HTTPAndHTTPS = {
  id: 104,
  title: "HTTP и HTTPS",
  children: [
    HTTPBase,
    HTTPHeaders,
    GETandPOST,
    PATCHandPUT,
    Options,
    HttpProtocols,
    IdempotentHTTPMethods,
    ProtocolTCPAndUDP,
    ConnectMethod,
    RequestResponse,
    ResponseCodes,
  ],
};
