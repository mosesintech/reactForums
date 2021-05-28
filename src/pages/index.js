import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../components/domain/Auth/AuthLinks';
// import styles from '../styles/Home.module.css'

export default function Home() {
  const software = "{ reactForums }"
  return (
    <>
      <h1>{software}</h1>
      <AuthLinks /><br />
      <Link href='/users/memberlist'>Memberlist</Link>
    </>
  )
}