import Fastify from 'fastify';
import cors from '@fastify/cors';

import { appRoutes } from './routes';

const app = Fastify();

// Para só habilitar um endereço espesifico configurar origins com o endereço
app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on port 3333');
  });
