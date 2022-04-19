const prisma = require('./prisma')

const { puppies, owners } = require('./seedData')

const dropTables = async () => {
  console.log(`Dropping tables...`)
  await prisma.$executeRaw`DROP TABLE IF EXISTS puppies_tricks;`
  await prisma.$executeRaw`DROP TABLE IF EXISTS tricks;`
  await prisma.$executeRaw`DROP TABLE IF EXISTS puppies;`
  await prisma.$executeRaw`DROP TABLE IF EXISTS owners;`
}

const createTables = async () => {
  console.log(`Creating tables...`)
  await prisma.$executeRaw`
  CREATE TABLE owners (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL
  );`
  await prisma.$executeRaw`
  CREATE TABLE puppies (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    "isCute" BOOLEAN DEFAULT true,
    age INTEGER,
    "ownerId" INTEGER REFERENCES owners(id)
  );`
  await prisma.$executeRaw`
  CREATE TABLE tricks (
    id SERIAL PRIMARY KEY,
    title VARCHAR
  );`
  await prisma.$executeRaw`
  CREATE TABLE puppies_tricks (
    id SERIAL PRIMARY KEY,
    puppy_id INTEGER REFERENCES puppies(id),
    trick_id INTEGER REFERENCES tricks(id),
    UNIQUE(puppy_id, trick_id)
  );
`
}

const seedDb = async () => {
  console.log('creating owners...')
  for (const owner of owners) {
    const createdOwner = await prisma.owners.create({ data: owner })
    console.log(createdOwner)
  }

  console.log('creating pups...')
  for (const puppy of puppies) {
    const pup = await prisma.puppies.create({ data: puppy })
    console.log(pup)
  }
}

// const alterTables = async () => {
//   await prisma.$executeRaw`
//     ALTER TABLE puppies
//     ADD catch_phrase AS ('I am ' + name + ', and I am ' + age + 'years old!');
//   `
// }

const initDb = async () => {
  try {
    await dropTables()
    await createTables()
    await seedDb()
    // await alterTables()
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}

initDb()
