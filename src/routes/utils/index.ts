import { FastifyInstance } from 'fastify';
import * as controller from './controller';



export default function useUtilsRoutes (app: FastifyInstance) {
  app.get('/ping', controller.pingPong);
}
