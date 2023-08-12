import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFormatDate from "../hooks/useFormatDate";

const OpenMessage = () => {

    const { id } = useParams();
    const { details } = useFetch(`${process.env.REACT_APP_API_URL}/contacts/${id}`)
    const { readableDate } = useFormatDate();

    if (details) {
        
        const {
            name,
            email,
            subject,
            message,
            contactDate
        } = details;

        const date = readableDate(contactDate);

        return (
            <div id="open-message">
                <div>
                    <h2>{ subject }</h2>
                    <p>{ date }</p>
                    <hr />
                    <h6>
                        { `from: ` }
                        <span>
                        { name }
                        </span>
                    </h6>
                    <h6>
                        { `email: ` }
                        <span>
                        { email }
                        </span>
                    </h6>
                    <hr />
                    <p>
                        { message }
                    </p>
                </div>
            </div>
        );
    };
}
 
export default OpenMessage;