import http from "./httpService";

const apiEndpoint = "http://localhost:3333/api";


export async function buildnew(star,review,did,de){

    return await http.post(apiEndpoint + "/doctor/newrate",{star,review,did,de});
}
export async function deleterate(id){

    return await http.post(apiEndpoint + "/doctor/deleterate",{id});
}
export async function findallrate(){

    return await http.get(apiEndpoint + "/doctor/allrate");
}
