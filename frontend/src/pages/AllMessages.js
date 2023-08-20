import { Form, Button } from "react-bootstrap";
import useHandleForm from "../hooks/useHandleForm";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { AllContext } from "../contexts/AllContexts";
import { Link } from "react-router-dom";
import useFormatDate from "../hooks/useFormatDate";

const AllMessages = () => {

    useFetch(`${process.env.REACT_APP_API_URL}/contacts`, 'SET_MESSAGES');
    const { messages } = useContext(AllContext);

    const initialFormState = {
        username: '',
        password: '',
    };

    const {
        handleForm,
        adminLogin,
        formData
    } = useHandleForm(initialFormState);
    const { readableDateAndTime } = useFormatDate()
    const token = localStorage.getItem('token');

    let messageList;
    if (messages) {
        messageList = messages.map(message => {

            const {
                _id,
                subject,
                contactDate
            } = message;

            const date = readableDateAndTime(contactDate);

            return (
                <Button key={_id} className="pointer" as={Link} to={`/admin/${_id}`}>
                    <h4>{ subject }</h4>
                    <p>{ date }</p>
                </Button>
            )
        });
    };

    return (
        <div id="all-messages">
            {
                !token ?
                <Form onSubmit={adminLogin}>
                    <Form.Label htmlFor="username">
                        username
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleForm}
                        required
                    />
                    <Form.Label htmlFor="password">
                        password
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleForm}
                        required
                    />
                    <div className="form-btns">
                        <Button type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
                :
                <>
                <Button style={{display: 'block', marginLeft: 'auto'}} onClick={() => {localStorage.clear(); window.location.reload()}}>
                    Logout
                </Button>
                <h1>Messages</h1>
                <div className="messages">
                    { messageList }
                </div>
                </>
            }
            
        </div>
    );
}
 
export default AllMessages;