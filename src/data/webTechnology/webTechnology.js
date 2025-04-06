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
import { REST } from "./REST/REST";
import { WebThreats } from "./WebThreats/WebThreats";
import { HTTPHeaders } from "./HTTPHeaders/HTTPHeaders";
import { ResponseCodes } from "./ResponseCodes/ResponseCodes";
import { GarbageCollection } from "./GarbageCollection/GarbageCollection";

export const WebTechnology = {
  id: 11,
  title: "Web-technology",
  children: [
    WhenUserOpensPage,
    JWT,
    JustAndHardRequest,
    HTTPAndHTTPS,
    VersionProtocolsHTTP,
    IdempotentHTTPMethods,
    ProtocolTCPAndUDP,
    LongPollingAndShortPolling,
    WebSocketAndPredecessorTechnologies,
    ServerSentEvents,
    PATCHandPUT,
    GETandPOST,
    Options,
    ModelOSI,
    ConnectMethod,
    RequestResponse,
    CORS,
    CRP,
    REST,
    WebThreats,
    HTTPHeaders,
    ResponseCodes,
    GarbageCollection,
  ],
};
