import {axiosClient, axiosPrivate } from "./axiosClient"
import { ICredential, IUser } from './interfaces';

class AuthAPI {
  signup = (user:IUser) => {
    const url = '/auth/signup';
    return axiosClient.post(url, user);
  };

  login = (credentialData: ICredential) =>{
    const url = '/auth/login'
    return axiosClient.post(url, credentialData);
  }
}

export default new AuthAPI()