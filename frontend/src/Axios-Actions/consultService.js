import http from "./httpService";
const apiEndpoint = "/";

export async function PostConsult(date,time,description,doctor,doctoremail) {
    return await http.post(apiEndpoint + "/consult/post",{date,time,description,doctor,doctoremail});
} 

export async function GetConsult() {
    return await http.get(apiEndpoint + "/consult/view");
} 

export async function GetAllConsult() {
    return await http.get(apiEndpoint + "/consult/viewall");
} 

export async function SetAccept(id){

    return await http.post(apiEndpoint + "/consult/accept",{id});
}
export async function SetReject(id){

    return await http.post(apiEndpoint + "/consult/reject",{id});
}
export async function SetEdit(id,date,time){

    return await http.post(apiEndpoint + "/consult/edit",{id,date,time});
}

export async function CusAccept(id){

    return await http.post(apiEndpoint + "/consult/cusaccept",{id});
}
export async function CusReject(id){

    return await http.post(apiEndpoint + "/consult/cusreject",{id});
}
export async function Payment(){

    return await http.post(apiEndpoint + "/consult/getpaymentinfo");
}

export async function rate(){

    return await http.get(apiEndpoint + "/consult/sendratetable");
}

