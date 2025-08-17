import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.wrapper}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </div>
  );
};

export default ContactList;
