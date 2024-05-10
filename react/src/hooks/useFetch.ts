import axios, { AxiosRequestConfig } from "axios"; // Install axios package by following this command npm install axios

type Fetch = {
  endPoint: string; // replace this one with all possible endpoints for better response
  method: string;
  body?: any;
  TokenInclude?: boolean;
  token?: string;
};

export const useFetch = ({
  endPoint,
  method,
  TokenInclude,
  body,
  token,
}: Fetch) => {
  try {
    const header = process.env.TOKEN_HEADER; // if you are using Next JS replace with NEXT_PUBLIC_TOKEN_HEADER
    const fetchData = async () => {
      const axiosConfig: AxiosRequestConfig = {
        method: method.toUpperCase(),
        url: endPoint,
        headers: {
          "Content-Type": "application/json",
          ...(TokenInclude && { [header]: token }),
        },
        data: body,
      };

      const response = await axios(axiosConfig);
      return response.data;
    };

    return fetchData();
  } catch (error: any) {
    throw new Error(error);
  }
};
