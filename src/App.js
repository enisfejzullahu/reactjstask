// src/App.js
import React, { useState } from "react";
import ContactsTable from "./components/ContactsTable";
import ContactForm from "./components/ContactForm";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddContact = () => {
    setEditingIndex(null);
    setIsFormVisible(true);
  };

  const handleEditContact = (index) => {
    setEditingIndex(index);
    setIsFormVisible(true);
  };

  const handleDeleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const handleSaveContact = (contact) => {
    if (editingIndex !== null) {
      const newContacts = [...contacts];
      newContacts[editingIndex] = contact;
      setContacts(newContacts);
    } else {
      setContacts([...contacts, contact]);
    }
    setIsFormVisible(false);
  };

  const handleCancel = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="container">
      <h1>Phone Book</h1>
      <button onClick={handleAddContact}>Add Contact</button>
      {isFormVisible ? (
        <ContactForm
          contact={editingIndex !== null ? contacts[editingIndex] : null}
          onSave={handleSaveContact}
          onCancel={handleCancel}
        />
      ) : (
        <ContactsTable
          contacts={contacts}
          onEdit={handleEditContact}
          onDelete={handleDeleteContact}
        />
      )}
    </div>
  );
};

export default App;
