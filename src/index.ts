import { app } from './app';
import { logger } from './logger';
import next from 'next';
const port = app.get('port');
const host = app.get('host');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handleNextRequest = nextApp.getRequestHandler();
nextApp.prepare().then(() => {
  app.use(async (ctx)=>{
    return handleNextRequest(ctx.req, ctx.res);
  });

  process.on('unhandledRejection', (reason, p) => logger.error('Unhandled Rejection at: Promise ', p, reason));

  app.listen(port).then(() => {
    logger.info(`Feathers app listening on http://${host}:${port}`);
  });
});
