import axios, { AxiosError, AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://67c19ea261d8935867e3a8e5.mockapi.io/api/v1",
  timeout: 10000, 
});


const callApi = async ({
  url,
  method = "get",
  params,
  data,
  cancelToken,
  ...res
}: AxiosRequestConfig) => {
  try {
    const response = await api({
      url,
      method,
      params,
      data,
      cancelToken,
      ...res
    });

    return response?.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      throw new Error("Request canceled");
    }
    throw new AxiosError("Error en la solicitud", (error as AxiosError).code);
  }
};

export default callApi;
