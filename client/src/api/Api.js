import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
  headers: {
    'X-RapidAPI-Key': '253cd1b96amsh6c4a3205498b3aep1815d0jsn0be06dbdac0b',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
  }
};

export async function pizzaData() {
    const pizzas = await axios.request(options);
    return pizzas;
}
