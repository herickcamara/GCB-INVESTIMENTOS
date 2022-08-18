import axios from "axios";

const instance = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const API = {
  getCep: async (cep: string) => {
    const repo = await instance.get(`/${cep}/json`);
    return repo.data;
  },
};
