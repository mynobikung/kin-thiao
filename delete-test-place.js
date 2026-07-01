const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.place.deleteMany({
    where: { id: 'TEST-123456' }
  });
  console.log('Deleted TEST-123456 from Place table');
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
