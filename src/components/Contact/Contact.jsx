import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import css from "./Contact.module.css"

const Contact = ({id, name, number, deleteContact}) => {
    return (
        <>
            <p><span className={css.icon}><IoPersonSharp /></span>{name}</p>
            <p><span className={css.icon}><FaPhone /></span>{number}</p>
            <button className={css['delete-btn']} onClick={() => deleteContact(id)}>Delete</button>
        </>
    )
};

export default Contact;
