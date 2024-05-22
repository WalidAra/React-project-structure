// install axios package : npm install axios 
// or modify it to normal fetch

import axios, { AxiosRequestConfig } from "axios";

type Fetch = {
  endPoint?: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  TokenInclude?: boolean;
  token?: string;
};

export const useFetch = async ({
  endPoint = "/",
  method,
  TokenInclude = false,
  body,
  token,
}: Fetch) => {
  const header = process.env.NEXT_PUBLIC_TOKEN_HEADER as string; // set your own header
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string; // set your own base url (backend server url)

  try {
    const axiosConfig: AxiosRequestConfig = {
      method: method.toUpperCase(),
      url: BASE_URL + (TokenInclude ? "/private" : "/public") + endPoint, // you might want to remove modify this part url config
      headers: {
        "Content-Type": "application/json",
        ...(TokenInclude && { [header]: token }),
      },
      data: body,
    };

    const response = await axios(axiosConfig);
    return response.data as FetchResponse; // that depends on the your own response object
  } catch (error: any) {
    console.log("====================================");
    console.error(
      `\n====> Error Fetch at : \n ` + "\nurl :",
      BASE_URL + (TokenInclude ? "/private" : "/public") + endPoint + "\n\n", // you might want to remove modify there as well
      error.message,
      "\n"
    );
    console.log("====================================");

    return {
      // that depends on your object response
      status: false,
      message: "Internal server error",
      data: null,
    };
  }
};
