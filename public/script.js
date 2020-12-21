// global variables
const showItemsBtn = document.getElementById('showItemsBtn');

// helper functions
const showItems = () => {
  // Make a request for all the items
  // eslint-disable-next-line no-undef
  axios
    .get('/items')
    .then((response) => {
    // handle success
      console.log(response);

      // assign items to a variable
      const itemsArray = response.data.items;

      // DOM element to display all the items
      const itemsContainer = document.createElement('div');

      itemsArray.forEach((item) => {
        const itemInfoEl = document.createElement('p');

        itemInfoEl.innerHTML = `${item.id} : ${item.name}`;

        itemsContainer.appendChild(itemInfoEl);
      });

      // append DOM elements
      document.body.appendChild(itemsContainer);
    })
    .catch((error) => {
    // handle error
      console.log(error);
    });
};

// Initialisation
showItemsBtn.addEventListener('click', showItems);
