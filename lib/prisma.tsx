import { PrismaClient } from "@prisma/client";

export const prisma =new  PrismaClient();


// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: ["query"], // Optional: logs all queries to console
//   });

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
