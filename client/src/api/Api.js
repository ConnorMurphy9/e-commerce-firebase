import axios from "axios";



const options = {
  method: 'GET',
  url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
  headers: {
    
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
  }
};

export async function pizzaData() {
    const pizzas = await axios.request(options);
    return pizzas;
}
