import axios from "axios";

const API_URL = "http://192.168.56.106:8081/employees";
export const getEmployees = () => {
    return axios.get(API_URL);
};

export const addEmployee = (employee) => {
    return axios.post(API_URL, employee);
};
