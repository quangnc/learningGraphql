const user = {
  _id: "1",
  name: "read",
  email: "quangnc@gmail.com",
  picture: "https://cloudinary.com/asdf"
};
module.exports = {
  Query: {
    me: () => user
  }
};
