import { Server, ServerCredentials } from '@grpc/grpc-js';

// Do not use @grpc/proto-loader
const server = new Server({
  'grpc.max_receive_message_length': -1,
  'grpc.max_send_message_length': -1,
});

server.bindAsync('0.0.0.0:9090', ServerCredentials.createInsecure(), (err: Error | null, bindPort: number) => {
  if (err) {
    throw err;
  }

  console.info(`gRPC:Server:${bindPort}`, new Date().toLocaleString());
  server.start();
});
