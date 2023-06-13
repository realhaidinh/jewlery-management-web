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

export const updateServiceType = async (token, body, id) => {
  let res;
  try {
    await api.put(`./service/${id}`, {
      ...body
    }, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(result => res = {...res, result});
  } catch (error) {
    console.log(error);
    res = {...res, error}
  }
  return res;
}

export const createServiceType = async (token, type) => {
  let res;
  try {
    await api.post('./service/new', {
      ...type,
    }, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(result => res = {...res, result});
  } catch (error) {
    console.log(error);
    res = {...res, error}
  }
  return res;
}