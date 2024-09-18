import {Link, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectSingleUser} from "../state/reducers/usersSlice.js";
import {Button, Header} from "semantic-ui-react";


const User = () => {
    const {userId} = useParams();
    const user = useSelector(state => selectSingleUser(state, userId));
    const navigate = useNavigate();

    if (!user) {
        return <div>Loading...</div>;
    }

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '14px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-start', width: '90%'
            }}>
                <Button
                    content="<- Back"
                    onClick={handleGoBack}
                    color="linkedin"
                    floated="left"
                    style={{borderRadius: '5px', paddingBottom: '14px', width: '100px'}}
                />
            </div>

            <Header as="h2" textAlign="center">{user.name}</Header>
            <Header as="h3" textAlign="center">Added blogs</Header>
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