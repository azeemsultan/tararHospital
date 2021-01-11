import http from "./httpService";
const apiEndpoint = "/";

export async function getpendingdoc() {
    return await http.get(apiEndpoint + "/admin/getdoc");
} 
export async function accept(id) {
    return await http.post(apiEndpoint + "/admin/acceptdoc",{id});
} 
export async function reject(id) {
    return await http.post(apiEndpoint + "/admin/rejectdoc",{id});
} 

export async function getdoc() {
    return await http.get(apiEndpoint + "/admin/getaccepteddoc");
} 
export async function getcus() {
    return await http.get(apiEndpoint + "/admin/getcus");
} export async function del(csearchemail){

    return await http.post(apiEndpoint+"/customer/del",{csearchemail});
}
export async function delcc(dsearchemail){

    return await http.post(apiEndpoint+"/doctor/del",{dsearchemail});
}