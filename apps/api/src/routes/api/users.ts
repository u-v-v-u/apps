/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FastifyPluginAsync } from 'fastify'
import { createHash } from 'node:crypto'

const createUser: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.post('/users', async function (request, _reply) {
    const { email, password } = request.body as { email: string; password: string };
    const currentTimestamp = new Date().toISOString();

    const hashedPassword = createHash('sha512').update(password).digest('base64');

    console.table({ email, currentTimestamp, hashedPassword })

    return { statusCode: 200, message: 'User Created' };
  });
};

export default createUser;
