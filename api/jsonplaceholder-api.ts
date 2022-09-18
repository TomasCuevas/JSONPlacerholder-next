import axios from "axios";

const jsonplaceholderapi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default jsonplaceholderapi;
