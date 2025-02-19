"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const usefetch = (userId) => {
  const [products, setProducts] = useState([]);
  const apilink = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apilink);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  return { products };
};

export default usefetch;
