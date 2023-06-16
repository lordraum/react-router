import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { getContact } from "../data/items";

const Contact = () => {
  const params = useParams();
  const contact = useMemo(
    () => getContact(params.contactid),
    [params.contactid]
  );

  if (!contact) {
    throw new Error("Contact doesn't exists");
  }

  return (
    <div>
      <Nav />
      <h1>{contact.name}</h1>
    </div>
  );
};

export default Contact;
