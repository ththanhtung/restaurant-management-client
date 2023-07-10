import React, { useState } from 'react';
import { Wrapper, Container, StyledForm } from './styles';
import { InputField, Button } from '../../components';
import authApi from '../../../../api/authApi';
import { AxiosError } from 'axios';

interface FormProps {
  username: string;
  password: string;
  email: string;
  phone: number;
  address: string;
}

const Signup: React.FC = () => {
  const [values, setValues] = useState<FormProps>({
    username: '',
    password: '',
    email: '',
    phone: 0,
    address: '',
  });

  const inputs = [
    {
      name: 'username',
      type: 'text',
      placeholer: 'enter username',
      label: 'username',
    },
    {
      name: 'address',
      type: 'text',
      placeholer: 'enter address',
      label: 'address',
    },
    {
      name: 'phone',
      type: 'phone',
      placeholer: 'enter phone',
      label: 'phone',
    },
    {
      name: 'password',
      type: 'password',
      placeholer: 'enter password',
      label: 'password',
    },
    {
      name: 'email',
      type: 'email',
      placeholer: 'enter email',
      label: 'email',
    },
    {
      name: 'confirm-password',
      type: 'password',
      placeholer: 'enter password',
      label: 'confirm password',
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    authApi
      .signup(values)
      .then((resp) => console.log(resp.data))
      .catch((error: AxiosError) => console.log('fail to create new user', error.response?.data));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  // console.log("env: ",process.env);
  

  return (
    <Wrapper>
      <Container>
        <h3 className="title">Sign up</h3>
        <StyledForm action="#" onSubmit={handleSubmit}>
          <div className="user-detail">
            {inputs.map((input, index) => (
              <InputField
                key={index}
                {...input}
                value={values?.[input.name as keyof FormProps]}
                width="calc(100%/2 - 20px)"
                onChange={handleChange}
              />
            ))}
          </div>
          <Button label="sign up" />
        </StyledForm>
      </Container>
    </Wrapper>
  );
};

export { Signup };
