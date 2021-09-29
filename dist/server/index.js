"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const protoLoader = __importStar(require("@grpc/proto-loader"));
const path = __importStar(require("path"));
const featureFlags_service_1 = __importDefault(require("../services/featureFlags/featureFlags.service"));
const port = 9090;
const ROOT_PATH = path.join(__dirname, '..', 'proto', 'featureFlags.proto');
const startServer = () => {
    const server = new grpc_js_1.Server({
        'grpc.max_receive_message_length': -1,
        'grpc.max_send_message_length': -1,
    });
    const packageDefinition = protoLoader.loadSync(ROOT_PATH);
    const proto = (0, grpc_js_1.loadPackageDefinition)(packageDefinition);
    server.bindAsync(`0.0.0.0:${port}`, grpc_js_1.ServerCredentials.createInsecure(), (err, bindPort) => {
        if (err) {
            throw err;
        }
        server.addService(proto.featureFlags.EppoFeatureFlagService.service, featureFlags_service_1.default.featureFlagService);
        console.info(`gRPC:Server:${bindPort}`, new Date().toLocaleString());
        server.start();
    });
};
startServer();
//# sourceMappingURL=index.js.map