import axios, { AxiosInstance } from "axios";

class ApiInstance {
  public Api: AxiosInstance;

  constructor() {
    this.Api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
    });
  }
}

export const Api = new ApiInstance().Api;
