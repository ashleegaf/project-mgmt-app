import { PrismaClient } from '@prisma/client';

// cache Prisma client globally
declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

// during development, reuse cached Prisma client
// to prevent Prisma error during HMR
let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
