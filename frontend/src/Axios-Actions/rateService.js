import http from "./httpService";

const apiEndpoint = "/";


export async function buildnew(star,review,did,de){

    return await http.post(apiEndpoint + "/doctor/newrate",{star,review,did,de});
}
export async function deleterate(id){

    return await http.post(apiEndpoint + "/doctor/deleterate",{id});
}
export async function findallrate(){

    return await http.get(apiEndpoint + "/doctor/allrate");
}
