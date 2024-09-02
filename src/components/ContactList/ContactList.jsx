import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul className={css.list}>
            {contacts.map(contact => {
                return (
                    <li key={contact.id} className={css.card}>
                        <Contact
                            name={contact.name}
                            number={contact.number}
                            id={contact.id}
                            deleteContact={deleteContact}
                        />
                   </li>
               )
           })}
        </ul>
    )
};

export default ContactList;
