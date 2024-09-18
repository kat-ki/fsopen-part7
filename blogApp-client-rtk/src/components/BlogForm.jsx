import {setNotification} from "../state/reducers/notificationSlice.js";
import {createBlog} from "../state/reducers/blogsSlice.js";
import {useDispatch} from "react-redux";
import {setStatus} from "../state/reducers/statusSlice.js";
import {FormField, Button, Form} from 'semantic-ui-react'

const BlogForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [formVisible, setFormVisible] = useState(false);

    const dispatch = useDispatch();

    const addBlog = (event) => {
        event.preventDefault();
        if (!title || !author || !url) {
            dispatch(setNotification('Title, author, and url must not be empty'));
            dispatch(setStatus('error'));
            setTimeout(() => {
                dispatch(setNotification(null));
            }, 2000);
            return;
        }

        const blog = {
            title, author, url
        }

        try {
            dispatch(createBlog(blog));
            dispatch(setNotification(`Added ${blog.title}`));
            dispatch(setStatus('success'));
            setTimeout(() => {
                dispatch(setNotification(null));
            }, 2000);
            setFormVisible(false);
        } catch (error) {
            dispatch(setNotification(error.message));
            dispatch(setStatus('error'));
            setTimeout(() => {
                dispatch(setNotification(null));
            }, 2000);
        } finally {
            setTitle('')
            setAuthor('')
            setUrl('')
        }
    }

    return (
        <main style={{display: 'flex', flexDirection: 'column'}}>
            <div>
                <Button content="+ add new" onClick={() => setFormVisible(!formVisible)} color="teal"
                        style={{marginLeft: '18px'}}/>
            </div>
            {formVisible &&
                (
                    <Form onSubmit={addBlog} style={{margin: '16px'}}>
                        <FormField>
                            <label>Title</label>
                            <input type="text"
                                   name="title"
                                   value={title}
                                   onChange={({target}) => setTitle(target.value)}/>
                        </FormField>
                        <FormField>
                            <label>Author</label>
                            <input type="text"
                                   name="author"
                                   value={author}
                                   onChange={({target}) => setAuthor(target.value)}/>
                        </FormField>
                        <FormField>
                            <label>Address</label>
                            <input type="text"
                                   name="url"
                                   value={url}
                                   onChange={({target}) => setUrl(target.value)}/>
                        </FormField>
                        <div style={{margin: '0 40px 0 40px'}}>
                            <Button type='submit'
                                    content="Submit"
                                    color="teal"
                                    floated='left'/>
                            <Button type="button"
                                    content="Cancel"
                                    floated='right'
                                    negative
                                    onClick={() => setFormVisible(false)}/>
                        </div>
                    </Form>
                )
            }
        </main>
    )
}


export default BlogForm