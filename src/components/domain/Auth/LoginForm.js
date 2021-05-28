import { useState } from 'react';
import { useMutation } from 'urql';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { userSession } from '../../store/features/authSlice';
import Input from '../../global/Input';
import Button from '../../global/Button';

export default function LoginForm() {
    const [cookies, setCookie] = useCookies(['session']);
    const cookie = useSelector((state) => state.auth.auth)
    const dispatch = useDispatch()

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    }

    async function setAuth(token) {
        await setCookie('session', token, { path: '/' })
        return dispatch(userSession(cookies));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginUser(values)
            .then(res => {
                if(res.error) {
                    return alert(res.error.message);
                }
                console.log(res.data.login.token);
                setAuth(res.data.login.token);
                return router.push(`/`);
            })
            .catch(err => {
                alert(`${err}`);
            });
    }

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

    const [loginUserResult, loginUser] = useMutation(LOGIN_USER_MUTATION);
    const router = useRouter();

    if(cookie.length) {
        return router.push(`/`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="email"
                    values={values.email}
                    onChange={handleChange}
                /><br />
                <Input
                    name="password"
                    type="password"
                    values={values.password}
                    onChange={handleChange}
                /><br />
                <Button type="submit">Submit</Button>
            </form>
        </>
    )
}