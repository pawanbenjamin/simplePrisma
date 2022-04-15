const { puppies, owners, tricks, puppies_tricks } = require('./seedData')

const { Puppies } = require('./models')

const seedDb = async () => {
  console.log('creating pups...')
  const pups = await Promise.all(puppies.map(Puppies.createPuppy))
  console.log('Pups:', pups)
}

seedDb()

console.log()
