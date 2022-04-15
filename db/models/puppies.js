const prisma = require('../prisma')

const getPups = async () => {
  const pups = await prisma.puppies.findMany({
    include: {
      puppies_tricks: {
        include: {
          tricks: true,
        },
      },
    },
  })
  return pups
}

// getPups()

const getPupById = async (pupId) => {
  const pup = await prisma.puppies.findUnique({
    where: {
      id: pupId,
    },
    include: {
      puppies_tricks: {
        include: {
          tricks: true,
        },
      },
    },
  })
  return pup
}

// getPupById(3)

const createPuppy = async () => {
  const puppy = await prisma.puppies.create({
    data: {
      name: 'Jerry',
      email: 'Jerry@Jerry.Jerry',
    },
  })
  return puppy
}

// createPuppy()

const updatePuppyById = async (pupId) => {
  const updatedPuppy = await prisma.puppies.update({
    where: { id: pupId },

    data: { age: 11, ownerId: 3 },
  })
  return updatedPuppy
}

// updatePuppyById(7)

const deletePuppy = async () => {
  const deletedPuppy = await prisma.puppies.delete({
    where: { id: 7 },
  })
  return deletedPuppy
}

// deletePuppy()
module.exports = {
  getPups,
  getPupById,
  createPuppy,
  updatePuppyById,
  deletePuppy,
}
