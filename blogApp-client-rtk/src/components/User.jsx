import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectSingleUser} from "../state/reducers/usersSlice.js";
import {Header} from "semantic-ui-react";


const User = () => {
    const {userId} = useParams();
    const user = useSelector(state => selectSingleUser(state, userId));

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <main style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Header as="h2">{user.name}</Header>
            <Header as="h3">Added blogs</Header>
            <ul>
                {user.blogs.map(blog => (
                    <li key={blog.id}>
                        <Link to={`/blogs/${blog.id}`} style={{fontSize: '16px'}}> {blog.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default User;