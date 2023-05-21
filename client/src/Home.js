import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Pizzas from "./components/Pizzas";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        setPizzas(data.data);
    }, [data]);
    return (
        <div>
            <Banner />
            <Pizzas pizzas={pizzas} />
        </div>
    );
};

export default Home;