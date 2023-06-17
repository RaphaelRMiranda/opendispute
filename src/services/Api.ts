import axios, { AxiosInstance } from "axios";

class ApiInstance {
  public Api: AxiosInstance;

  constructor() {
    this.Api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
    });

    this.Api.interceptors.response.use((config) => {
      const location = window.location.pathname;
      if (config.status === 401 && location !== "/") {
        window.location.href = "/";
      } else if (location === "/" && config.status === 401) {
        window.location.reload();
      }

      return config;
    });
  }
}

export const Api = new ApiInstance().Api;
