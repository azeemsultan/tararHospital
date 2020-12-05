import http from "./httpService";

const apiEndpoint = "http://localhost:3333/api";


export async function Payment(email) {
    return await http.post(apiEndpoint + "/payment/pay",{email});
} 