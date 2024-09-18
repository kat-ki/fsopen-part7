import {useDispatch} from "react-redux";
import {addComment} from "../state/reducers/blogsSlice.js";
import {FormField, Button, Form} from 'semantic-ui-react'

const CommentForm = ({blogId}) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const handleSubmitComment = (e) => {
        e.preventDefault();
        dispatch(addComment(blogId, {comment: comment}));
        setComment('');
    };

    return (
        <Form onSubmit={handleSubmitComment}
              style={{display: 'flex', flexDirection: 'column', margin: '20px 0 20px 0'}}>
            <FormField>
                <input type="text"
                       value={comment}
                       onChange={(e) => setComment(e.target.value)}
                       placeholder="Add a comment"
                       style={{width: '100%', marginRight: '10px'}}
                />
            </FormField>
            <Button size="small"
                    floated="left"
                    type='submit'
                    color="linkedin"
                    content="Submit"
                    disabled={!comment}
                    style={{width: '40%'}}
            />
        </Form>
    );
};

export default CommentForm;