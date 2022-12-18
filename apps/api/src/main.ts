import autoload, { AutoloadPluginOptions } from '@fastify/autoload';
import type { FastifyPluginAsync } from 'fastify';
import favicon from 'fastify-favicon';
import { join } from 'path';

export type AppOptions = Record<string, unknown> & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
  fastify;

  void fastify.register(favicon);

  void fastify.register(autoload, {
    dir: join(__dirname, 'plugins'),
    options: opts
  });

  void fastify.register(autoload, {
    dir: join(__dirname, 'routes'),
    options: opts
  });
};

export default app;
export { app };
