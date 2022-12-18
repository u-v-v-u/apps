import sensible, { SensibleOptions } from '@fastify/sensible'
import fp from 'fastify-plugin'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default fp<SensibleOptions>(async (fastify, _opts) => {
  fastify.register(sensible, {
    logLevel: 'info'
  });
});
