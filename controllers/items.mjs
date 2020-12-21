export default function items(db) {
  const index = (request, response) => {
    db.Item.findAll()
      .then((items) => {
        response.send({ items });
      })
      .catch((error) => console.log(error));
  };

  const home = (request, response) => {
    response.render('items/home');
  };

  return {
    index,
    home,
  };
}
