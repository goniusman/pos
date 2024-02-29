import { decodedToken } from "@/helpers/jwtDecode";

export const storeUserInfo = (accessToken: string) => {
  if (!accessToken || typeof window === "undefined") return;

  localStorage.setItem("accessToken", accessToken);
};

export const getUserInfo = () => {
  if (typeof window === "undefined") return null;

  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) return null;

  const decoded: any = decodedToken(accessToken);

  const userInfo = {
    userId: decoded?.user_id || "",
    role:
      decoded?.[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ] || "",
    user:
      decoded?.["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ||
      "",
    userName:
      decoded?.[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"
      ] +
        " " +
        decoded?.[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"
        ] || "",
    email:
      decoded?.[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
      ] || "",
  };

  return userInfo;
};

export const removeUserInfo = () => {
  if (typeof window !== "undefined") localStorage.removeItem("accessToken");
};

export const getAccessToken = () => {
  if (typeof window !== "undefined") return localStorage.getItem("accessToken");
};

export const isLoggedIn = () => {
  if (typeof window === "undefined") return false;

  const authToken = localStorage.getItem("accessToken");
  return !!authToken;
};
