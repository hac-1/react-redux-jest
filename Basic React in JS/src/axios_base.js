import axios from "axios";
//USED TO CREATE BASE OBJECT TO BE USED IN OTHER COMPONENTS
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
//ANY URL GIVEN TO THE IMPORTED OBJECYT WOULD BE APPENDED WITH/
