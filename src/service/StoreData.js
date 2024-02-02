 
import axios from "axios";
const Bussiness = (data) => {
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("orgname", data.orgname);
    formdata.append("email", data.email);
    formdata.append("phone",data.phone);
    return axios.post("https://script.google.com/macros/s/AKfycbzlLzONJs_oX_WGRXGFnk7yRj_kzF9H2rZRi7GZTk9QMG9xOlLqM9bvMwqeyVZoSOa4Uw/exec", formdata)
}

export {Bussiness}