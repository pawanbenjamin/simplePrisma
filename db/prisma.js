const { PrismaClient } = require('@prisma/client')

const { puppies } = require('./seedData')

const prisma = new PrismaClient()

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
  console.log(JSON.stringify(pups, null, 4))
}

getPups()

// const getSinglePup = async (pupId) => {
//   const pup = await prisma.puppies.findUnique({
//     where: {
//       id: pupId,
//     },
//     include: {
//       puppies_tricks: {
//         include: {
//           tricks: true,
//         },
//       },
//     },
//   })
//   console.log(JSON.stringify(pup, null, 4))
// }

// getSinglePup(3)

// const createPuppy = async () => {
//   const puppy = await prisma.puppies.create({
//     data: {
//       name: 'Jerry',
//       email: 'Jerry@Jerry.Jerry',
//     },
//   })
//   console.log(JSON.stringify(puppy, null, 4))
// }

// createPuppy()

// const updatePuppyById = async (pupId) => {
//   const puppy = await prisma.puppies.update({
//     where: { id: pupId },

//     data: { age: 11, ownerId: 3 },
//   })
//   console.log(puppy)
// }

// updatePuppyById(7)

// const deletePuppy = async () => {
//   const deletedPuppy = await prisma.puppies.delete({
//     where: { id: 7 },
//   })
//   console.log(deletedPuppy)
// }

// deletePuppy()
