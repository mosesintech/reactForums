import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Profile from '../../components/domain/Users/Profile';

export default function UserProfile() {
  const software = "{ reactForums }"
  return (
    <>
      <h1>{software} - Memberlist</h1>
      <Link href='/'>Home</Link><br />
      <Link href='/users/memberlist'>Memberlist</Link><br />
      <Profile />
    </>
  )
}