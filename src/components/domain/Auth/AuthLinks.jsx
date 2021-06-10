import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function AuthLinks() {
  const cookie = useSelector((state) => state.auth.auth);
  return (
    <>
      {cookie.length ? (
        <>
          <Link href='/logout'>Logout</Link>
        </>
      ) : (
        <>
          <Link href='/register'>Register</Link>
          <br />
          <Link href='/login'>Login</Link>
        </>
      )}
    </>
  );
}
