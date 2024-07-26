import { FastifyInstance } from 'fastify';
// middleware
import corsMiddleware from '@/middleware/cors';



export default function useMiddleware(app: FastifyInstance) {
  // app.addHook('preHandler', corsMiddleware);

  // merge
  app.addHook('preHandler', ((request, reply, done) => {
    corsMiddleware(request, reply);

    done();
  }));
}
