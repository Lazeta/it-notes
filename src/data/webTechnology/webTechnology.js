import { WhenUserOpensPage } from "./WhenUserOpensPage/WhenUserOpensPage";
import { JWT } from "./JWT/JWT";
import { JustAndHardRequest } from "./JustAndHardRequest/JustAndHardRequest";
import { HTTPAndHTTPS } from "./HTTPAndHTTPS/HTTPAndHTTPS";
import { VersionProtocolsHTTP } from "./VersionProtocolsHTTP/VersionProtocolsHTTP";
import { IdempotentHTTPMethods } from "./IdempotentHTTPMethods/IdempotentHTTPMethods";
import { ProtocolTCPAndUDP } from "./ProtocolTCPAndUDP/ProtocolTCPAndUDP";
import { LongPollingAndShortPolling } from "./LongPollingAndShortPolling/LongPollingAndShortPolling";
import { WebSocketAndPredecessorTechnologies } from "./WebSocketAndPredecessorTechnologies/WebSocketAndPredecessorTechnologies";
import { ServerSentEvents } from "./ServerSentEvents/ServerSentEvents";
import { PATCHandPUT } from "./PATCHandPUT/PATCHandPUT";
import { GETandPOST } from "./GETandPOST/GETandPOST";
import { Options } from "./Options/Options";
import { ModelOSI } from "./ModelOSI/ModelOSI";
import { ConnectMethod } from "./ConnectMethod/ConnectMethod";
import { RequestResponse } from "./RequestResponse/RequestResponse";
import { CORS } from "./CORS/CORS";
import { CRP } from "./CRP/CRP";
import { RESTAPI } from "./RESTAPI/RESTAPI";
import { WebThreats } from "./WebThreats/WebThreats";
import { HTTPHeaders } from "./HTTPHeaders/HTTPHeaders";
import { ResponseCodes } from "./ResponseCodes/ResponseCodes";
import { Cookie } from "./Cookie/Cookie";
import { LocalStorage } from "./LocalStorage/localStorage";
import { SessionStorage } from "./SessionStorage/sessionStorage";
import { Cache } from "./Cache/cache";
import { DOM } from "./DOM/DOM";
import { BOM } from "./BOM/BOM";
import { DataStructure } from "./DataStructure/DataStructure";

export const WebTechnology = {
  id: 11,
  title: "Web-technology",
  children: [
    BOM,
    Cache,
    CORS,
    CRP,
    Cookie,
    ConnectMethod,
    DataStructure,
    DOM,
    GETandPOST,
    HTTPAndHTTPS,
    HTTPHeaders,
    IdempotentHTTPMethods,
    JWT,
    JustAndHardRequest,
    LocalStorage,
    LongPollingAndShortPolling,
    ModelOSI,
    Options,
    PATCHandPUT,
    RESTAPI,
    RequestResponse,
    ResponseCodes,
    SessionStorage,
    ServerSentEvents,
    VersionProtocolsHTTP,
    WebThreats,
    WebSocketAndPredecessorTechnologies,
    WhenUserOpensPage,
    ProtocolTCPAndUDP,
  ],
};
