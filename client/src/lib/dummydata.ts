export interface Movie {
  id: number;
  img: string;
  price: number;
  description: string;
  title: string;
  category: string;
}

export const listData: Movie[] = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71XqqKTZz7L._AC_UF1000,1000_QL80_.jpg",
    price: 120,
    description: "A young boy learns that he is a wizard on his 11th birthday.",
    title: "Harry Potter and the Sorcerer's Stone",
    category: "Fantasy",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/51DIp35SkeL._AC_UF894,1000_QL80_.jpg",
    price: 150,
    description:
      "A year after disposing of the body of a man they accidentally killed, a group of dumb teenagers are stalked by a bumbling serial killer.",
    title: "Scary Movie",
    category: "Comedy",
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
    price: 100,
    description:
      "A group of friends embark on a journey to destroy a powerful ring.",
    title: "Titanic",
    category: "Adventure",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/M/MV5BMTAyNDYxOTI4MzNeQTJeQWpwZ15BbWU4MDQ3MDU3NjIx._V1_.jpg",
    price: 150,
    description:
      "A young girl must navigate life after being orphaned in New York City.",
    title: "Annie",
    category: "Musical",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
    price: 120,
    description: "A computer hacker learns about the true nature of reality.",
    title: "The Matrix",
    category: "Sci-Fi",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/71ugU7XT7CL._AC_UF1000,1000_QL80_.jpg",
    price: 130,
    description:
      "A family struggles with the challenges of the zombie apocalypse.",
    title: "World War Z",
    category: "Horror",
  },
  {
    id: 7,
    img: "https://musicart.xboxlive.com/7/02361100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    price: 150,
    description: "A group of toys come to life when humans aren't around.",
    title: "Toy Story",
    category: "Animation",
  },
  {
    id: 8,
    img: "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Bodyguard_1992_Film_Poster.jpg",
    price: 100,
    description: "An FBI agent must protect a key witness from an assassin.",
    title: "The Bodyguard",
    category: "Action",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    price: 120,
    description: "A team of astronauts is sent to investigate a planet.",
    title: "Interstellar",
    category: "Sci-Fi",
  },
  {
    id: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytnCU9kFvNgYW7Lvj74m630W9MGD0s0gMLg&s",
    price: 150,
    description: "A family's bond is tested when they move to a new town.",
    title: "Little Women",
    category: "Drama",
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/S/pv-target-images/8da09fea47590d604cc871a98b28960b4f77c3f08a004c8669c4c6c9f96793f5.jpg",
    price: 170,
    description:
      "A man's life changes forever when he meets an extraterrestrial.",
    title: "E.T. the Extra-Terrestrial",
    category: "Family",
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@._V1_.jpg",
    price: 140,
    description: "A brilliant scientist is trapped in a time loop.",
    title: "Groundhog Day",
    category: "Comedy",
  },
];
