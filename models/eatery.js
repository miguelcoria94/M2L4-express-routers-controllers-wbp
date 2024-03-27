const eateries = [
  {
    id: 3226,
    name: "Burger Queen",
    genre: "American",
    address: "5 Pine St, Toronto",
    price: "$",
  },
  {
    id: 5475,
    name: "Sushi King",
    genre: "Japanese",
    address: "11 Maple Blvd, Toronto",
    price: "$$$",
  },
  {
    id: 9567,
    name: "West Side Marios",
    genre: "Italian",
    address: "43 Elm Ave, Toronto",
    price: "$$$",
  },
];

function getAll() {
  return eateries;
}

function getOne(id) {
  return eateries.find((restaurant) => restaurant.id === parseInt(id));
}

module.exports = {
  getAll,
  getOne,
};
