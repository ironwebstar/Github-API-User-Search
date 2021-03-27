import axios, { AxiosInstance } from 'axios';
import { IUsersResponse } from '../utils/interface';

let axiosInstance: AxiosInstance;

const baseURL: string = process.env.REACT_APP_SERVER;

axiosInstance = axios.create({
  baseURL,
});

const getRequest = async <T, K = any>(
  url: string,
  params: K = null as any
): Promise<T> => {
  const response = await axiosInstance.get(url, { params });
  return response.data;
};

// USERS API
export const searchUsers = async (login: string) =>
  await getRequest<IUsersResponse>(`/search/users?q=${login} in:login`);
