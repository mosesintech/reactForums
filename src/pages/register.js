import RegisterForm from '../components/domain/Auth/RegisterForm.js';
import Link from 'next/link';

export default function register() {
  const software = "{ reactForums }"
  return (
    <>
        <Link href="/"><h1>{software}</h1></Link>
        <p>Register to {software}</p>
        <RegisterForm />
    </>
    )
}