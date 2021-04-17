import axios from "axios";

export const axurApi = axios.create({
  baseURL: "http://testapp.axreng.com:3000/"
})