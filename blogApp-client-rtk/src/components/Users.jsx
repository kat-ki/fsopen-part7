import {useSelector} from "react-redux";
import {selectAllUsers} from "../state/reducers/usersSlice.js";
import {Link} from "react-router-dom";
import {
    Header,
    HeaderContent,
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHeaderCell,
    TableRow
} from "semantic-ui-react";

const Users = () => {
    const users = useSelector(selectAllUsers);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: '0 20px'
        }}>
            <Header as="h2">Users</Header>

            <Table basic='very' size="small" style={{width: '90%'}}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell style={{fontSize: '16px'}}>Author</TableHeaderCell>
                        <TableHeaderCell style={{fontSize: '16px'}}>Blogs created</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>
                                <Header as='h4'>
                                    <HeaderContent>
                                        <Link to={`/users/${user.id}`} style={{fontSize: '16px'}}>{user.name}</Link>
                                    </HeaderContent>
                                </Header>
                            </TableCell>
                            <TableCell style={{fontSize: '16px'}}>{user.blogs.length}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Users;