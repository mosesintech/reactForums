import { useRouter } from 'next/router';
import moment from 'moment';
import { useQuery } from 'urql';
import DeletedProfile from './DeletedProfile.js';

export default function Memberlist() {
    const router = useRouter();
    const { username } = router.query;

    const GET_USER_QUERY = `
        query {
            getUser(username: "${username}") {
                id
                username
                email
                createdAt
                modifiedAt
                isDeleted
            }
        }
    `;

    const [res] = useQuery({ query: GET_USER_QUERY });
    const { data, fetching, error } = res;
    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;

    return (
        <>
        {data.getUser.isDeleted ? 
            <>
            <DeletedProfile />
            </> 
            : 
            <>
            <h2>{data.getUser.username}</h2>
            </>
        }
        </>
    )
}