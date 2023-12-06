// src/api.js
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_NEWS_API_kEYS; // Replace with your News API key

const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export const getTopHeadlines = async () => {
  try {
    const response = await newsApi.get("/top-headlines", {
      params: {
        country: "us",
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return [];
  }
};

export const getEverything = async () => {
  try {
    const response = await newsApi.get("/everything", {
      params: {
        q: "war",
        sources: "bbc-news,the-verge, aaj-tak",
        domains: "bbc.co.uk,techcrunch.com",
        from: "2023-12-1",
        to: "2023-12-5",
        language: "en",
        sortBy: "relevancy",
        apiKey,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching everything:", error);
    return [];
  }
};

export const getSources = async () => {
  try {
    const response = await newsApi.get("/sources", {
      params: {
        category: "technology",
        language: "en",
        country: "us",
        apiKey,
      },
    });
    return response.data.sources;
  } catch (error) {
    console.error("Error fetching sources:", error);
    return [];
  }
};
