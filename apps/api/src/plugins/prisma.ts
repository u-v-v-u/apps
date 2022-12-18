import { PrismaClient } from 'database'
import fp from 'fastify-plugin'

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default fp(async (fastify, _opts) => {
  const prisma = new PrismaClient()

  await prisma.$connect()
  fastify.log.info({ prisma: 'connected'})

  fastify.decorate('prisma', prisma)

  fastify.addHook('onClose', async (fastify) => {
    await fastify.prisma.$disconnect()
  })
})