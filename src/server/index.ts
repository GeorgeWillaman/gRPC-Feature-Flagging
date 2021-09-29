import { Server, ServerCredentials, loadPackageDefinition } from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'path';
import { ProtoGrpcType } from '../proto/featureFlags';
import { EppoFeatureFlagServiceHandlers } from '../proto/featureFlags/EppoFeatureFlagService';
import featureFlagService from '../services/featureFlags/featureFlags.service';

const port: string | number = 9090;
const ROOT_PATH = path.join(__dirname, '..', 'proto', 'featureFlags.proto');

type StartServerType = () => void;
const startServer: StartServerType = (): void => {
  // Do not use @grpc/proto-l ader
  const server = new Server({
    'grpc.max_receive_message_length': -1,
    'grpc.max_send_message_length': -1,
  });
  const packageDefinition = protoLoader.loadSync(ROOT_PATH);
  const proto = (loadPackageDefinition(
    packageDefinition,
  ) as unknown) as ProtoGrpcType;

  server.bindAsync(`0.0.0.0:${port}`, ServerCredentials.createInsecure(), (err: Error | null, bindPort: number) => {
    if (err) {
      throw err;
    }

    server.addService(proto.featureFlags.EppoFeatureFlagService.service,
      featureFlagService.featureFlagService as unknown as EppoFeatureFlagServiceHandlers);

    /*
    server.addService(proto.featureFlags.EppoFeatureFlagService.service, {
      CreateFeature: (call, callback): void => {
        console.log(call);
        return callback(null, {
          success: true,
        });
      },
    } as EppoFeatureFlagServiceHandlers);
    */

    console.info(`gRPC:Server:${bindPort}`, new Date().toLocaleString());
    server.start();
  });
};

startServer();
