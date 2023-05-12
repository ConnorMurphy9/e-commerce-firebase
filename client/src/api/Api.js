// import axios from "axios";

// export async function pizzaData(){
//     const pizzas = await axios.get("")
// }

const axios = require('axios');

export async function pizzaData(){}

const options = {
  method: 'GET',
  url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
  headers: {
    'X-RapidAPI-Key': 'd9d1de419cmsh3efe3d08141101ap1d1cdejsnd21e801ce08b',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
  }
};

const axiosFetch = async () => {
    try {
	    const response = await axios.request(options);
	    console.log(response.data);
    } catch (error) {
	    console.error(error);
    }
};

axiosFetch();