import React, { useState } from 'react';
import { Wrapper, Container, StyledForm } from './styles';
import { InputField, Button } from '../../components';

interface FormProps {
  username: string;
  password: string;
}

const Signup: React.FC = () => {
  const [values, setValues] = useState<FormProps>({
    username: '',
    password: '',
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
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    console.log(Object.fromEntries(data.entries()));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

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
                onChange={handleChange}
              />
            ))}
          </div>
          <Button label='sign up'/>
        </StyledForm>
      </Container>
    </Wrapper>
  );
};

export { Signup };
