import axios from "axios";

export const axiosInstance = axios.create({})

export const apiConnector = (method, url, bodyData, headers, params)=>{

   return axiosInstance({
    method : method,
    url : url,
    data : bodyData ? JSON.stringify(bodyData) : null,
    headers : headers ? headers :  {
      "Content-type": "application/json; charset=UTF-8",
      
  },
    params: params ? params : null,
   })
}