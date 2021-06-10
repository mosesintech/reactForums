import React, { useState } from 'react';
import { useMutation } from 'urql';
import { useRouter } from 'next/router';
import Input from '../../global/Input';
import Button from '../../global/Button';

export default function LoginForm() {
  const router = useRouter();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setValues((val) => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  const LOGIN_USER_MUTATION = `
        mutation ($email: String!, $password: String!){
            login(email: $email, password: $password) {
                token {
                    id
                    username
                    email
                }
            }
        }
    `;

  const [loginUser] = useMutation(LOGIN_USER_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(values)
      .then((res) => {
        if (res.error) {
          return;
        }
        router.push('/');
      })
      .catch((err) => err);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          name='email'
          type='email'
          values={values.email}
          onChange={handleChange}
        />
        <br />
        <Input
          name='password'
          type='password'
          values={values.password}
          onChange={handleChange}
        />
        <br />
        <Button type='submit'>Submit</Button>
      </form>
    </>
  );
}
