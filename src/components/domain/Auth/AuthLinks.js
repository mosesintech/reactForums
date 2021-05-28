import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

export default function AuthLinks() {
    const router = useRouter();
    const cookie = useSelector((state) => state.auth.auth)
    return (
        <>
        {cookie.length ? 
            <>
            <Link href="/logout">Logout</Link>
            </>
        :
            <>
            <Link href="/register">Register</Link><br />
            <Link href="/login">Login</Link>
            </>
        }
        </>
    )
}