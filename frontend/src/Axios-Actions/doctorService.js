import http from "./httpService";

const apiEndpoint = "http://localhost:3333/api";
const tokenKey = "token";
export async function DoctorView() {
    return await http.get(apiEndpoint + "/doctor/view");
} 
export async function PostAppointment(date,description,doctor,doctoremail) {

    console.log(date,description,doctor,doctoremail);
    return await http.post(apiEndpoint + "/appointment/post",{date,description,doctor,doctoremail});
} 