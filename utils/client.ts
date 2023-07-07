import io from 'socket.io-client';
import socketio from '@feathersjs/socketio-client';
import { createClient } from '@/src/client';

export * from '@/src/client';

const connection = socketio(io(process.env.NEXT_PUBLIC_HOST ?? 'http://localhost:3000'));

export const client = createClient(connection);
