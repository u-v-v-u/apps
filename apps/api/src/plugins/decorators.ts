import fp from 'fastify-plugin'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default fp(async (fastify, _opts) => {
  fastify.decorate('someSupport', function () {
    return 'hugs';
  });
});

declare module 'fastify' {
  export interface FastifyInstance {
    someSupport(): string;
  }
}
