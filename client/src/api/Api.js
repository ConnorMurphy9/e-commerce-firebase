import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
  headers: {
    'X-RapidAPI-Key': '1dd18c3497msh1c1cc64cc30e1f7p10cc13jsn299fe5a68280',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
  }
};
export async function pizzaData() {
    const pizzas = await axios.request(options);
    return pizzas;
}
