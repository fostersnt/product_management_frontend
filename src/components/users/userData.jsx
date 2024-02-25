import axios from "axios";

export const getUsers = async () => {
  let final_response = {};
  const options = {
    method: "GET",
    url: "http://127.0.0.1:8000/api/users",
  };

  try {
    const response = await axios.request(options);
    final_response = response.data;
  } catch (error) {
    final_response = {};
  }
  return final_response;
};
