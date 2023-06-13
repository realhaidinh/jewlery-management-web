import api from "./axios.config";

export const getAllServices = async (token) => {
  let res;
  try {
    await api.get("/service", {
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