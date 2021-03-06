import React from 'react';
import Link from 'next/link';
import TheMemberlist from '../../components/domain/Users/Memberlist';

export default function Memberlist() {
  const software = '{ reactForums }';
  return (
    <>
      <h1>{software} - Memberlist</h1>
      <Link href='/'>Home</Link>
      <br />
      <Link href='/users/memberlist'>Memberlist</Link>
      <br />
      <TheMemberlist />
    </>
  );
}
