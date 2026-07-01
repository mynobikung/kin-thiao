const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.vote.deleteMany({
    where: { placeId: 'TEST-123456' }
  });
  console.log('Deleted TEST votes');
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
