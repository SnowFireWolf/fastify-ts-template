import dotenv from 'dotenv';
dotenv.config();
import 'module-alias/register';

import Fastify from 'fastify';

// middleware
import useMiddleware from '@/middleware/useMiddleware';

// router
import useUtilsRoutes from '@/routes/utils';

// plugins
import useFastifyLogger from '@/plugins/useLogger';






const app = Fastify({
  logger: useFastifyLogger(),
  trustProxy: '127.0.0.1',
});






/* ------------ app middleware ------------- */
// app.addHook('preHandler', corsMiddleware);
// app.addHook('preHandler', postHogAnalyticsMiddleware);
useMiddleware(app);
/* ------------ app middleware ------------- */




/* ------------ app plugins ------------- */
/* ------------ END - app plugins ------------- */



/* ------------ app routes ------------- */
useUtilsRoutes(app);






export default app;
