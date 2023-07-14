import axios, { AxiosInstance } from "axios";
import { useUser } from "@/context/User";
import { UserInterface, UserProps } from "@/context/User/types";
import { useEffect } from "react";

class ApiInstance {
  public Api: AxiosInstance;

  constructor() {
    this.Api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
    });
  }
}

const ApiWrapper = () => {
  const { setToken, setUser } = useUser();

  const Api = new ApiInstance().Api;

  useEffect(() => {
    Api.interceptors.response.use(
      async (response) => {
        return response;
      },
      (err) => {
        if (err.response.status === 401) {
          localStorage.removeItem("@dispute/user");
          localStorage.removeItem("@dispute/token");
          setToken("");
          setUser({} as UserInterface);
          window.location.reload();
        }

        return Promise.reject(err);
      }
    );
  }, [Api, setToken, setUser]);

  return null;
};

export const Api = new ApiInstance().Api;

export default ApiWrapper;
