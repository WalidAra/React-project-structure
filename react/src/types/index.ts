export type Fetch = {
  endPoint?: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  TokenInclude?: boolean;
  token?: string;
};
