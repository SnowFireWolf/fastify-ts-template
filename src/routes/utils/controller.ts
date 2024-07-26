import { FastifyRequest, FastifyReply } from 'fastify';



/**
 * ping
 */
export const pingPong = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.type('application/json').code(200);
  return 'pong';
};
