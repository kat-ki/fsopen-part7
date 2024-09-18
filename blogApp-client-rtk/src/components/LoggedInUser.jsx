import {useDispatch, useSelector} from "react-redux";
import {logout} from "../state/reducers/authSlice.js";
import {Button} from "semantic-ui-react";


const LoggedInUser = () => {
    const user = useSelector(state => state.authUser.user);
    const dispatch = useDispatch();

    return (
        <div>
            <p style={{margin: '10px 0 10px 0', fontSize: '16px'}}><b>{user?.name}</b> logged in</p>
            <Button content="Log out" floated="right" onClick={() => dispatch(logout())} color="red" size="small"/>
        </div>

    );
};

export default LoggedInUser;