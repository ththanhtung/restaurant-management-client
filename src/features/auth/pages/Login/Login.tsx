import React, { useState } from 'react'
import { Container, StyledForm, Wrapper } from './styles';
import { Button, InputField } from '../../components';

interface FormProps {
  username: string;
  password: string;
}

const Login:React.FC = () => {
    const [values, setValues] = useState<FormProps>({
    username: '',
    password: ''
  });

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
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <StyledForm action="#" onSubmit={handleSubmit}>
          <div className="user-detail">
            {inputs.map((input, index) => (
              <InputField
                key={index}
                {...input}
                value={values?.[input.name as keyof FormProps]}
                width='100%'
                onChange={handleChange}
              />
            ))}
          </div>
          <Button label="Login"/>
        </StyledForm>
      </Container>
    </Wrapper>
  );
}

export {
  Login
}