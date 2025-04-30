import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://68121ef53ac96f7119a6e923.mockapi.io/api/products",
        formData
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  return (
    <>
      <form className="max-w-sm mx-auto mt-5" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
           
            className="block mb-2 text-sm font-medium text-black-900"
          >
            Product Name
          </label>
          <input
            type="text"
            value={formData.productName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-black"
            placeholder="Enter Your Product Name"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
