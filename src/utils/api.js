import axios from "axios";

const API_URL = "http://localhost:5000";

/* 
    INSTRUCTION: 
    - Create a function to fetch games from the API. 
    - API call may include query parameters for pagination, search, genre, and sort. 
*/

export const getGames = async (genre) => {
  try {
    let filters = {};
    if (genre !== "all") {
      filters.genre = genre;
    }
    const queries = new URLSearchParams(filters);
    const response = await axios.get(API_URL + "/games?" + queries.toString());
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

/* INSTRUCTION: Create a function to fetch genres from the API */

export const getGame = async (id) => {
  const res = await axios.get(`${url}/games/${id}`);
  return res.data;
};

export const addGame = async (data) => {
  const response = await axios.post(`${url}/games`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data
};

export const updateGame = async (id, data) => {
  const response = await axios.put(
    `${url}/games/${(data, id)}`,
    JSON.stringify(data),

    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const deleteGame = async (id) => {
  const response = await axios.delete(`${url}/games/${id}`);
 return response.data;
};
