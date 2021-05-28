import { useEffect } from 'react';
import { useMutation } from 'urql';
import { useRouter } from 'next/router';

export default function LogoutLogic() {
    const LOGOUT_USER_MUTATION = `
        mutation{
            logout {
                token
            }
        }
    `;

    const [logoutUserResult, logoutUser] = useMutation(LOGOUT_USER_MUTATION);
    const router = useRouter();

    useEffect(() => {
        logoutUser();
        router.push('/login');
    }, []);


    return (
        <>
        <p>Ending User Session</p>
        </>
    )
}