import { FastifyRequest, FastifyReply, FastifyError, errorCodes } from 'fastify';
import errorHTML from '@/views/error';



/* ============ 404 not found ============ */
export function notFoundHandler(request: FastifyRequest, reply: FastifyReply) {
  reply
    .code(404)
    .type('text/html; charset=utf-8')
    .send(errorHTML(404, 'Not Found'));
  // reply
  //   .code(404)
  //   .type('text/html; charset=utf-8')
  //   .send('Not Found');
}



/* ============ error  ============ */
export function errorHandler(error: FastifyError, request: FastifyRequest, reply: FastifyReply) {
  console.log('Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE', errorCodes.FST_ERR_BAD_STATUS_CODE);
  console.error(error);
  if(process.env.NODE_ENV === 'production') {
    reply
      .code(500)
      .type('text/html; charset=utf-8')
      .send(errorHTML(500, 'Internal Server Error'));
  }
  // console.log(error);
  // if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
  //   // Log error
  //   this.log.error(error);
  //   // console.error(error);
  //   // Send error response
  //   reply.status(500).send({ ok: false });
  // } else {
  //   // fastify will use parent error handler to handle this
  //   reply.send(error);
  // }
}
