import React from 'react';
import Link from 'next/link';
import RegisterForm from '../components/domain/Auth/RegisterForm';

export default function register() {
  const software = '{ reactForums }';
  return (
    <>
      <Link href='/'>
        <h1>{software}</h1>
      </Link>
      <p>
        Register to
        {software}
      </p>
      <RegisterForm />
    </>
  );
}
