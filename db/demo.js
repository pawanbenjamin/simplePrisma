const prisma = require('./prisma')

/** Example crud operations with prisma methods */

const createPuppy = async (puppyObj) => {
  const puppy = await prisma.puppies.create({
    data: puppyObj,
  })
  console.log(puppy)
}
const pupToCreate = {
  name: 'Your new puppy',
  email: 'create some fake data!',
  age: 6,
  ownerId: 1,
}

// createPuppy(pupToCreate)

const getPuppies = async () => {
  const pups = await prisma.puppies.findMany({
    include: {
      puppies_tricks: {
        include: {
          tricks: true,
        },
      },
    },
  })
  // Json to log
  console.log(JSON.stringify(pups, null, 4))
}

// getPuppies()

const getSingePuppy = async (id) => {
  const singlePup = await prisma.puppies.findUnique({
    where: {
      id: id,
    },
    include: {
      owners: true,
    },
  })
  console.log(singlePup)
}

// getSingePuppy(4)

const updatePuppyById = async (puppyId, updateObj) => {
  const updatedPuppy = await prisma.puppies.update({
    where: {
      id: puppyId,
    },
    data: updateObj,
  })
  console.dir(updatedPuppy)
}

const newPuppyDetails = { name: 'Some new name' }

// updatePuppyById(7, newPuppyDetails)
