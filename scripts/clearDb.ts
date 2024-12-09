import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function clearDatabase() {
  // Delete all records from the notification table
  await prisma.notification.deleteMany({})
  
  console.log('Database cleared successfully')
}

clearDatabase()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect()) 