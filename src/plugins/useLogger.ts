import logger from '@/lib/logger';
import chalk from 'chalk';
import { FastifyReply } from 'fastify';

import { ResSerializerReply } from 'fastify/types/logger';
import { Server } from 'http';



const statusCodeWithColor = (statusCode: number) => {
  // get the status code if response written

  // get status color
  const color = statusCode >= 500 ? 31 // red
    : statusCode >= 400 ? 33 // yellow
      : statusCode >= 300 ? 36 // cyan
        : statusCode >= 200 ? 32 // green
          : 0; // no color

  return '\x1b[' + color + 'm' + statusCode + '\x1b[0m';
};



function useFastifyLoggerStream(loggerString: string) {
  const logData = JSON.parse(loggerString);
  // console.log('logData', logData);

  if (logData.res !== undefined) {
    const response = logData.res;
    const headers = response.headers;
    const realProxyIp = headers['x-forwarded-for'] || '';
    const userAgent = headers['user-agent'] || '';

    const logText = `${response.method} ${chalk.cyan(response.url)} ${statusCodeWithColor(logData.res.statusCode)} | ${chalk.yellowBright(Number(logData.responseTime).toFixed(4)) } ms | ${response.remoteAddress} ${realProxyIp} - "${userAgent}`;

    logger.info(logText);
  }

  // if(logData.req !== undefined) {
  //   // const request = logData.req;
  //   // const realProxyIp = request.headers['x-forwarded-for'] || '';
  //   // const userAgent = request.headers['user-agent'] || '';

  //   // logger.info(`REQUEST => ${request.method} - ${chalk.cyan(request.url)} | ${request.remoteAddress} ${realProxyIp} - "${userAgent}"`);
  // } else if (logData.res !== undefined) {
  //   logger.info(`RESPONSE => ${logData.res.statusCode} | ${Number(logData.responseTime).toFixed(4)} ms`);
  // }
}




export default function useFastifyLogger() {
  return {
    serializers: {
      // req (request) {
      //   return {
      //     method: request.method,
      //   }
      // },
      res: function (res: ResSerializerReply <Server, FastifyReply>) {
        return {
          statusCode: res.statusCode,
          method: res.request.method,
          url: res.request.url,
          headers: res.request.headers,
          hostname: res.request.hostname,
          remoteAddress: res.request.ip,
          remotePort: res.request.socket.remotePort,
        };
      },
    },
    stream: {
      write: useFastifyLoggerStream,
    },
  };
}
