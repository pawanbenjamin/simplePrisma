const puppies = [
  { name: 'Sir Waggington', email: 'sir-wag@email.com', age: 5, ownerId: 1 },
  {
    name: 'Fiona Penny Pickles',
    email: 'pick-your-pennies@email.com',
    age: 6,
    ownerId: 1,
  },
  {
    name: 'Professor Wagglesworth',
    email: 'waggie@email.com',
    age: 6,
    ownerId: 2,
  },
  {
    name: 'Sergeant Barkowitz',
    email: 'the-sarge@email.com',
    age: 4,
    ownerId: 2,
  },
  {
    name: 'Captain Sniffer',
    email: 'capn-sniff@email.com',
    age: 7,
    ownerId: 3,
  },
  { name: 'Miss Furbulous', email: 'miss-furby@email.com', age: 1, ownerId: 3 },
  {
    name: 'Alfred von Wigglebottom',
    email: 'alfie@email.com',
    age: 2,
    ownerId: 3,
  },
]

const owners = [
  { name: 'Maureen Biologist' },
  { name: 'Teri Dactyl' },
  { name: 'Aida Bug' },
]

const tricks = [
  { title: 'Sit' },
  { title: 'Lay Down' },
  { title: 'Jump through flaming hoop' },
  { title: 'ride motorcycle' },
]

const puppies_tricks = [
  { puppy_id: 1, trick_id: 2 },
  { puppy_id: 1, trick_id: 3 },
  { puppy_id: 3, trick_id: 1 },
]

module.exports = { puppies, owners, tricks, puppies_tricks }
