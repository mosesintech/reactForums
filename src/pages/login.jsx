import React from 'react';
import Link from 'next/link';
import LoginForm from '../components/domain/Auth/LoginForm';

export default function login() {
  const software = '{ reactForums }';
  return (
    <>
      <Link href='/'>
        <h1>{software}</h1>
      </Link>
      <p>
        Login to
        {software}
      </p>
      <LoginForm />
    </>
  );
}
