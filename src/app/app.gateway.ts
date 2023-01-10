import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Messages } from 'src/users/entities/messages.entity';

const users = {};
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway implements OnGatewayConnection, OnGatewayInit {
  @WebSocketServer() server: Server;
  afterInit(server: any) {
    console.log('server initialization');
  }
  // handleDisconnect(client: any) {
  //   client.broadcast.emit('left', users[client.id]);
  //   console.log('disconnect', users[client.id]);

  //   delete users[client.id];
  // }
  handleConnection(client: Socket, ...args: any[]) {
    client.on('newuser', (name) => {
      console.log(client.id);
      const Abc = (users[client.id] = name);
      console.log(Abc);
      // client.to(Client.id).emit('  ');
    });
  }
  @SubscribeMessage('sendmessage')
  handleMessage(client: Socket, payload: Messages): any {
    return 'Hello world!';
  }
}
