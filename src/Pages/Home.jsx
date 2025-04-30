import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://68121ef53ac96f7119a6e923.mockapi.io/api/products"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-1 flex-wrap gap-6 mt-5">
      {data.map((ele) => {
        return (
          <div key={ele.productId}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={ele.productImage} alt="image" />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {ele.productName}
                </h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {ele.productPrice}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {ele.productDescription}
                </p>
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
