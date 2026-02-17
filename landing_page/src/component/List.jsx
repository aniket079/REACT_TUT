import { useState } from "react";

function List() {

  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");

  function addContact() {
    const newContact = {
      id: Date.now(),
      name
    };
    const arrayCont = newContact+contacts
    setContacts([...contacts, newContact]);
    setName("");
  }

  function removeContact(id) {
    const newContacts =  contacts.filter(contact => contact.id !== id)
    setContacts(
        newContacts
    );
  }

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addContact}>Add</button>

      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}
            <button onClick={() => removeContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
