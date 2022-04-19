const prisma = require('./prisma')

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

getSingePuppy(4)
