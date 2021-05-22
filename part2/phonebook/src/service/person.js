import axios from "axios";

const BaseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const responce = axios.get(BaseUrl);
  return responce.then((responce) => responce.data);
};

const create = (newObject) => {
  const response = axios.post(BaseUrl, newObject);
  return response.then((response) => response.data);
};
const update = (id,newObject)=>{
    const response = axios.put(`${BaseUrl}/${id}`,newObject)
    return response.then(response=>response.data)
}
const deletePerson = (id) => {
  const response = axios.delete(`${BaseUrl}/${id}`);
  return response.then((response) => response.data);
};

const exportObj = { getAll, create, update, deletePerson };

export default exportObj;
