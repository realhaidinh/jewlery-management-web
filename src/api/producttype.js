import api from "./axios.config";

export const getAllTypes = async (token) => {
  let res;
  try {
    await api.get("/product-type", {
      headers: {
        Authorization: "Bearer " + token
      }
    }).then(result => res = {...res, result});
  } catch (error) {
    console.log(error);
    res = {...res, error};
  }
  return res;
}