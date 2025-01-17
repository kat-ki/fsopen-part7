import {Link} from "react-router-dom";
import LoggedInUser from "./LoggedInUser.jsx";
import {MenuMenu, MenuItem, Menu} from 'semantic-ui-react'

const Header = () => {

    return (
        <Menu pointing secondary fluid>
            <MenuItem>
                <Link to="/" style={{fontSize: '18px'}}>Blogs</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/users" style={{fontSize: '18px'}}>Users</Link>
            </MenuItem>
            <MenuMenu position='right'>
                <MenuItem>
                    <LoggedInUser/>
                </MenuItem>
            </MenuMenu>
        </Menu>
    );
};

export default Header;