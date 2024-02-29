import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  if (!token) return "";

  return jwtDecode(token);
};
