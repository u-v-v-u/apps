import sensible, { SensibleOptions } from '@fastify/sensible'
import fp from 'fastify-plugin'

export default fp<SensibleOptions>(async (fastify, _opts) => {
  fastify.register(sensible, {
    logLevel: 'info',
  })
})