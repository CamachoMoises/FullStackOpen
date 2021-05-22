import axios from "axios";

const BaseUrl = "http://localhost:3001/persons";

const getAll=()=>{
    const responce= axios.get(BaseUrl)
    return responce.then(responce=>responce.data)
}

const create = newObject => {
    const response = axios.post(BaseUrl, newObject)
    return response.then(response=>response.data)
}

const exportObj= { getAll, create }

export default exportObj