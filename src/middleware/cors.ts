import { FastifyRequest, FastifyReply } from 'fastify';
// done: HookHandlerDoneFunction



export default function corsMiddleware(request: FastifyRequest, reply: FastifyReply) {
  // header allow origin
  const originHeader = String(request.headers['Origin'] || '');
  const refererHeader = String(request.headers['Referer'] || '');

  if(originHeader === 'https://example.com' && refererHeader === 'https://example.com/') {
    reply.header('Access-Control-Allow-Origin', 'https://example.com');
    reply.header('Access-Control-Allow-Credentials', 'true');
  } else {
    reply.header('Access-Control-Allow-Origin', '*');
  }



  // done();
}
