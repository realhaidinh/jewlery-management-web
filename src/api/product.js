import api from "./axios.config";

export const getAllProducts = async (token) => {
  let res;
  try {
    res = await api.get('./product', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(result => res = result);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
}