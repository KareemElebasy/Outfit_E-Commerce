import axios from "axios";
const API_URL = "https://ecommerce.phpv8.aait-d.com/website";
const options = {
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Accept-language": "en",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${API_URL}/${url}`, options);
  return data;
};

export const PostDataToApi = async (url, options1) => {
  const { data } = await axios.post(`${API_URL}/${url}`, options1);
  return data;
};
