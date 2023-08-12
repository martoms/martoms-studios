import { Form, Button } from "react-bootstrap";
import useHandleForm from "../hooks/useHandleForm";

const Contact = () => {

    const initialFormState = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };

    const {
        handleForm,
        handleSubmit,
        formData,
        setFormData
    } = useHandleForm(initialFormState);

    return (
        <div className='contact'>
            <h2>Let's Work Together!</h2>
            <div className="contact-option">
                <hr />
                <p>email me</p>
            </div>
            <a href="mailto:tomataomarjohn@gmail.com">
                <p className="my-email">tomataomarjohn@gmail.com</p>
            </a>
            <div className="contact-option">
                <hr />
                <p>or leave a message</p>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="name">
                    Name
                </Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleForm}
                    required
                />
                <Form.Label htmlFor="email">
                    Email
                </Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleForm}
                    required
                />
                <Form.Label htmlFor="name">
                    Subject
                </Form.Label>
                <Form.Control
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleForm}
                    required
                />
                <Form.Label htmlFor="name">
                    Message
                </Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleForm}
                    required
                />

                <div className="form-btns">
                    {
                        formData.name.length > 0 &&
                        <Button type="button" onClick={() => setFormData(initialFormState)}>
                            Reset
                        </Button>
                    }
                    <Button type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}
 
export default Contact;