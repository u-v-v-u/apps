import fp from 'fastify-plugin'

export default fp(async (fastify, _opts) => {
  fastify.decorate('someSupport', function () {
    return 'hugs'
  })
})

declare module 'fastify' {
  export interface FastifyInstance {
    someSupport(): string;
  }
}