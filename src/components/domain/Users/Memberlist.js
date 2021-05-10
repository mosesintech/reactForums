import moment from 'moment';
import Link from 'next/link';
import { useQuery } from 'urql';
// import { useSelector, useDispatch } from 'react-redux'
// import { getUsers } from '../../store/features/usersSlice';

const GET_USERS_QUERY = `
    query {
        getUsers {
            id
            username
            email
            createdAt
            modifiedAt
            isDeleted
        }
    }
`;

export default function Memberlist() {
    const [res] = useQuery({ query: GET_USERS_QUERY });
    // const users = useSelector((state) => state.users.users)
    // const dispatch = useDispatch()
    const { data, fetching, error } = res;
    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
    // dispatch(getUsers(data.getUsers));

    return (
        <>
        {data.getUsers.map(user => {
            return (
                <>
                <Link href={{ pathname: '/users/[username]', query: { username: user.username } }}>
                    <h2 key={user.id}>{user.username}</h2>
                </Link>
                <p>Join Date: {moment(user.createdAt).format('YYYY-MM-DD')}</p>
                </>
            )
        })}
        </>
    )
}