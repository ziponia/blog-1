import httpClient from "./httpClient";

const list = async () => {
  return httpClient.get(`/v1/drivers`);
};

export default {
  list,
};
