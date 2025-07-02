import { WhenUserOpensPage } from "./WhenUserOpensPage/WhenUserOpensPage";
import { JWT } from "./JWT/JWT";
import { JustAndHardRequest } from "./JustAndHardRequest/JustAndHardRequest";
import { HTTPAndHTTPS } from "./HTTPAndHTTPS/HTTPAndHTTPS";
import { LongPollingAndShortPolling } from "./LongPollingAndShortPolling/LongPollingAndShortPolling";
import { WebSocketAndPredecessorTechnologies } from "./WebSocketAndPredecessorTechnologies/WebSocketAndPredecessorTechnologies";
import { ServerSentEvents } from "./ServerSentEvents/ServerSentEvents";
import { ModelOSI } from "./ModelOSI/ModelOSI";
import { CORS } from "./CORS/CORS";
import { CRP } from "./CRP/CRP";
import { RESTAPI } from "./RESTAPI/RESTAPI";
import { WebThreats } from "./WebThreats/WebThreats";
import { Cookie } from "./Cookie/Cookie";
import { LocalStorage } from "./LocalStorage/localStorage";
import { SessionStorage } from "./SessionStorage/sessionStorage";
import { Cache } from "./Cache/cache";
import { DOM } from "./DOM/DOM";
import { BOM } from "./BOM/BOM";
import { DataStructure } from "./DataStructure/DataStructure";

export const Network = {
  id: 11,
  title: "Network",
  children: [
    BOM,
    Cache,
    CORS,
    CRP,
    Cookie,
    DataStructure,
    DOM,
    HTTPAndHTTPS,
    JWT,
    JustAndHardRequest,
    LocalStorage,
    LongPollingAndShortPolling,
    ModelOSI,
    RESTAPI,
    SessionStorage,
    ServerSentEvents,
    WebThreats,
    WebSocketAndPredecessorTechnologies,
    WhenUserOpensPage,
  ],
};