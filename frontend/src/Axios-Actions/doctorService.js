import http from "./httpService";

const apiEndpoint = "http://localhost:3333/api";

export async function DoctorView() {
    return await http.get(apiEndpoint + "/doctor/view");
} 
export async function PostAppointment(date,time,description,doctor,doctoremail) {
    return await http.post(apiEndpoint + "/appointment/post",{date,time,description,doctor,doctoremail});
} 

export async function GetAppointment() {
    return await http.get(apiEndpoint + "/appointment/view");
} 

export async function GetAllAppointment() {
    return await http.get(apiEndpoint + "/appointment/viewall");
} 
export async function GetDoctor() {
    return await http.get(apiEndpoint + "/doctor/viewd");
} 

export async function SetAccept(id){

    return await http.post(apiEndpoint + "/appointment/accept",{id});
}
export async function SetReject(id){

    return await http.post(apiEndpoint + "/appointment/reject",{id});
}
export async function SetEdit(id,date,time){

    return await http.post(apiEndpoint + "/appointment/edit",{id,date,time});
}

export async function CusAccept(id){

    return await http.post(apiEndpoint + "/appointment/cusaccept",{id});
}
export async function CusReject(id){

    return await http.post(apiEndpoint + "/appointment/cusreject",{id});
}
