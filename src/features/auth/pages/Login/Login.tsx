import React, { useState } from 'react';
import { Container, StyledForm, Wrapper } from './styles';
import { Button, InputField } from '../../components';
import authApi from '../../../../api/authApi';
import { AxiosError } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { setCredential } from '../../authSlice';
import { useDispatch } from 'react-redux';
interface FormProps {
  username: string;
  password: string;
}

interface LocationProps {
  state: {
    from: Location;
  };
}

interface UserResp {
  metadata: {
    userId: string;
    email: string;
  };
  token: string;
}

const Login: React.FC = () => {
  const [values, setValues] = useState<FormProps>({
    username: '',
    password: '',
  });
  const location = useLocation() as unknown as LocationProps;

  const from = location.state?.from?.pathname || '/';

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const inputs = [
    {
      name: 'email',
      type: 'email',
      placeholer: 'enter email',
      label: 'email',
    },
    {
      name: 'password',
      type: 'password',
      placeholer: 'enter password',
      label: 'password',
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resp = await authApi.login(values);

      const data = resp.data as UserResp;
      console.log(data.metadata);

      dispatch(
        setCredential({
          user: data.metadata,
          token: data.token,
        })
      );

      navigate(from, { replace: true });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  // console.log("env: ",process.env);

  return (
    <Wrapper>
      <Container>
        <h3 className="title">Login</h3>
        <StyledForm action="#" onSubmit={handleSubmit as never}>
          <div className="user-detail">
            {inputs.map((input, index) => (
              <InputField
                key={index}
                {...input}
                value={values?.[input.name as keyof FormProps]}
                width="100%"
                onChange={handleChange}
              />
            ))}
          </div>
          <Button label="Login" />
        </StyledForm>
      </Container>
    </Wrapper>
  );
};

export { Login };
