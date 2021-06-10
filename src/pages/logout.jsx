import React from 'react';
import LogoutLogic from '../components/domain/Auth/LogoutLogic';

export default function Logout() {
  const software = '{ reactForums }';
  return (
    <>
      <h1>{software}</h1>
      <LogoutLogic />
    </>
  );
}
