import { useState } from 'react';
import { useMutation } from 'urql';
import { useRouter } from 'next/router';
import Input from '../../global/Input';
import Button from '../../global/Button';

export default function RegisterForm() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser(values)
            .then(res => {
                if(res.error) {
                    return alert(res.error.message);
                }
                return router.push(`/login`);
            })
            .catch(err => {
                alert(`${err}`);
            });
    }

    const ADD_USER_MUTATION = `
        mutation ($username: String!, $email: String!, $password: String!){
            addUser(username: $username, email: $email, password: $password) {
                username
            }
        }
    `;
    const [addUserResult, addUser] = useMutation(ADD_USER_MUTATION);
    const router = useRouter();

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    name="username"
                    type="text"
                    values={values.username}
                    onChange={handleChange}
                /><br />
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