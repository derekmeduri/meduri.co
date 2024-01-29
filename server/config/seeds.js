const db = require("./connection");
const { User, Product, Category } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Category", "categories");
  await cleanDB("Product", "products");
  await cleanDB("User", "users");

  const categories = await Category.insertMany([
    { name: "Moneyclip" },
    { name: "Wallet" },
    { name: "Cardholder" },
    { name: "Travel" },
  ]);

  console.log("categories seeded");

  const products = await Product.insertMany([
    {
      name: "Black Money Clip",
      category: categories[0]._id,
      description: "Features four card pockets and silver money clip.",
      image: "black-wallet01.jpeg",
      price: 300.0,
      quantity: 10,
    },
    {
      name: "Black Billfold Wallet",
      category: categories[1]._id,
      description:
        "Features four card pockets and one long pocket for notes and bills.",
      image: "black-wallet02.jpeg",
      price: 400.0,
      quantity: 10,
    },
    {
      name: "Black Folding Card Holder ",
      category: categories[2]._id,
      description: "Features two card pockets",
      image: "black-wallet03.jpeg",
      price: 150.0,
      quantity: 10,
    },
    {
      name: "Black Slim Card Holder",
      category: categories[2]._id,
      description:
        "Features four card pockets and one short pocket for notes and bills.",
      image: "black-wallet04.jpeg",
      price: 200.0,
      quantity: 10,
    },
    {
      name: "The Frankie Wallet",
      category: categories[1]._id,
      description:
        "Blue Saffiano Leather. Features four card pockets and one long pocket for notes and bills.",
      image: "blue-wallet01.jpeg",
      price: 600.0,
      quantity: 10,
    },
    {
      name: "The June Wallet",
      category: categories[1]._id,
      description:
        "Features two card pockets and two long pocket for notes and bills. Brass snap closure.",
      image: "blue-wallet02.jpeg",
      price: 500.0,
      quantity: 10,
    },
    {
      name: "Brown Money Clip",
      category: categories[0]._id,
      description: "Features four card pockets and gold money clip.",
      image: "brown-wallet01.jpeg",
      price: 300.0,
      quantity: 10,
    },
    {
      name: "Brown Billfold Wallet",
      category: categories[1]._id,
      description:
        "Features six card pockets and two hidden pockets. One long pocket for notes and bills.",
      image: "brown-wallet02.jpeg",
      price: 450.0,
      quantity: 10,
    },
    {
      name: "Brown Passport Cover",
      category: categories[3]._id,
      description:
        "For organizing your passport, cards, notes and bills while you travel.",
      image: "brown-passport01.jpeg",
      price: 300.0,
      quantity: 10,
    },
    {
      name: "Green Money Clip",
      category: categories[0]._id,
      description: "Features four card pockets and gold money clip.",
      image: "green-wallet01.jpeg",
      price: 300.0,
      quantity: 10,
    },
  ]);

  console.log("products seeded");

  await User.create({
    firstName: "Mark",
    lastName: "Meduri",
    email: "cleancutMR2@yahoo.com",
    password: "password123",
    orders: [
      {
        products: [products[3]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Mike",
    lastName: "Meduri",
    email: "djyeayea@yahoo.com",
    password: "password123",
  });

  console.log("users seeded");

  process.exit();
});
