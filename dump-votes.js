const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const votes = await prisma.vote.findMany();
  console.log(votes);
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
