import app from './app';
import logger from '@/lib/logger';
// middleware
import { notFoundHandler, errorHandler } from '@/middleware/error';



/* ============ middleware ============ */
// 404 not found
app.setNotFoundHandler(notFoundHandler);

// catch 500 error
app.setErrorHandler(errorHandler);
/* ============ middleware END ============ */



/* ============ server listener ============ */
let port = process.env.PORT || 3030;
if (process.env.NODE_ENV === 'development') {
  port = process.env.DEV_PORT;
}
port = Number(port);



app.listen({ host: '0.0.0.0', port: port }, (err, address) => {
  if (err) throw err;
  logger.info(`App is running at ${address} in ${process.env.NODE_ENV} mode`);
  logger.info('Press CTRL-C to stop\n');
  // Server is now listening on ${address}{process.env
});






/* ============ server exit handle ============ */
const handleTermSignals = async () => {
  // console.info('SIGTERM signal received.');
  logger.warn('closing fastify backend...');

  // some close function here: ex database close or others
  // ...

  logger.warn('fastify backend closed.');
  process.exit(1);
};

process.on('SIGINT', handleTermSignals);
process.on('SIGTERM', handleTermSignals);
// process.on('SIGQUIT', handleTermSignals);
