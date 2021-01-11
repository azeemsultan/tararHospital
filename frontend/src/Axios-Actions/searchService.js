import http from "./httpService";

const apiEndpoint = "/";

export async function searchbyemail(email){

    return await http.post(apiEndpoint + "/doctor/searchbyemail",{email});
}
export async function searchbypmdc(p){

    return await http.post(apiEndpoint + "/doctor/searchbypmdc",{p});
}