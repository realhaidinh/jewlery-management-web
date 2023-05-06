import Axios from "axios";

const apiServer = "http://localhost:5000";

export async function getAllProduct() {
  try {
    const res = await Axios.get(`${apiServer}/products`);
    return res.data;
  }
  catch (err) {
    console.log(err);
  }
}