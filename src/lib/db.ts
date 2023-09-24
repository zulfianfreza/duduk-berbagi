import { PrismaClient } from "@prisma/client";
import "server-only";

declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ log: ["query"] });
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient({ log: ["query"] });
  }
  prisma = global.cachedPrisma;
}

const db = prisma;

export default db;
