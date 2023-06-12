import api from "./axios.config";

export const getAllSellForms = async (token) => {
  let res;
  try {
    await api.get('./sell', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(result => res = result);
    return res;
  } catch (error) {
    console.log(error);
  }
}