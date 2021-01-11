import jwtDecode from "jwt-decode";
import http from "./httpService";


const apiEndpoint = "/";
const tokenKey = "token";

http.setJwt(getJwt());
export async function AdminLogin(email, password) {

  return await http.post("/admin/login", { email, password });
}
export async function CustomerLogin(email, password) {
  return await http.post("/customer/login", { email, password });
} 
export async function DoctorLogin(email, password) {
    return await http.post( "/doctor/login", { email, password });
  } 

export async function CustomerSignUp(
  firstname,
  lastname,
  email,
  password
) {
  return await http.post("/customer/signup", {
    firstname,
    lastname,
    email,
    password
  });
}
export async function DoctorSignUp(
    firstname,
    lastname,
    pmdc,
    email,
    password
  ) {
    return await http.post("/doctor/signup", {
      firstname,
      lastname,
      pmdc,
      email,
      password
    });
  }

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
export function getJwt() {
  return localStorage.getItem(tokenKey);
}