import axios from "axios";
import { API } from "../constants/API";

async function getImagesFromQuery(query: String, page: Number) {
  try {
    const response = await axios.get(`${API.BASE_URL}/search/photos`, {
      headers: { Authorization: `Client-ID ${API.ACCESS_KEY}` },
      params: {
        page,
        query,
        per_page: 50,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function getImagesFromId(id: String) {
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
