import axios from "axios";
import { API } from "../constants/API";

function getImagesFromQuery(query: string, page: number) {
  return axios.get(`${API.BASE_URL}/search/photos`, {
    headers: { Authorization: `Client-ID ${API.ACCESS_KEY}` },
    params: {
      page,
      query,
      per_page: 50,
    },
  });
}

async function getImagesFromId(id: string) {
  try {
    const response = await axios.get(`${API.BASE_URL}/photos/${id}`, {
      headers: { Authorization: `Client-ID ${API.ACCESS_KEY}` },
    });
    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export { getImagesFromQuery, getImagesFromId };
