import fp from 'fastify-plugin'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default fp(async (fastify, _opts) => {
  fastify.addHook('onRequest', (_req, res, done) => {
    res.headers({
      'Cache-Control': 'public, max-age=7776000',
      'X-Powered-By': 'uvvu.pw | TypeScript and Rust Development'
    });

    done();
  });
});
