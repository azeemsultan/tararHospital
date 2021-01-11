import http from "./httpService";

const apiEndpoint = "/";


export async function Payment(email,fee,id) {
    return await http.post(apiEndpoint + "/payment/pay",{email,fee,id});
} 