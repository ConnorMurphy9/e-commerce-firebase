import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
  headers: {
    'X-RapidAPI-Key': 'b1aa850c5fmsh91cd3e97ac8b642p19b0aejsn5f76a54b847d',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
  }
};

export async function pizzaData() {
    const pizzas = await axios.request(options);
    return pizzas;
}
