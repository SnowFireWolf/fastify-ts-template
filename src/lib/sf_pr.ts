import { FastifyRequest } from 'fastify';



//process req ip address
export function getUserIpAddress(request: FastifyRequest) {
    let user_ip: string;

    //cloudflare get connecting user ip
    if (request.headers['cf-connecting-ip']) {
        user_ip = request.headers['cf-connecting-ip'] as string;
    } else if (request.headers['x-forwarded-for']) {
        user_ip = request.headers['x-forwarded-for'] as string;
    } else if (request.headers['http-client-ip']) {
        user_ip = request.headers['http-client-ip'] as string;
    } else {
        user_ip = request.socket.remoteAddress;
    }

    return user_ip;
}
