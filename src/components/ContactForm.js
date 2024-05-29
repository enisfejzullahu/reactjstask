// src/components/ContactForm.js
import React, { useState } from "react";

const ContactForm = ({ contact, onSave, onCancel }) => {
  const [name, setName] = useState(contact?.name || "");
  const [lastName, setLastName] = useState(contact?.lastName || "");
  const [address, setAddress] = useState(contact?.address || "");
  const [city, setCity] = useState(contact?.city || "");
  const [country, setCountry] = useState(contact?.country || "");
  const [emails, setEmails] = useState(contact?.emails || [""]);
  const [phoneNumbers, setPhoneNumbers] = useState(
    contact?.phoneNumbers || [""]
  );

  const handleSave = () => {
    onSave({ name, lastName, address, city, country, emails, phoneNumbers });
  };

  const handleAddEmail = () => setEmails([...emails, ""]);
  const handleAddPhoneNumber = () => setPhoneNumbers([...phoneNumbers, ""]);

  return (
    <div>
      <h3>{contact ? "Edit Contact" : "Add Contact"}</h3>
      <form>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Address</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label>City</label>
          <input value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div>
          <label>Country</label>
          <input value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div>
          <label>Emails</label>
          {emails.map((email, index) => (
            <div key={index} className="action-buttons">
              <input
                value={email}
                onChange={(e) => {
                  const newEmails = [...emails];
                  newEmails[index] = e.target.value;
                  setEmails(newEmails);
                }}
              />
              {index === emails.length - 1 && (
                <button
                  type="button"
                  className="action-button add-input-button"
                  onClick={handleAddEmail}
                >
                  Add Email
                </button>
              )}
            </div>
          ))}
        </div>
        <div>
          <label>Phone Numbers</label>
          {phoneNumbers.map((number, index) => (
            <div key={index} className="action-buttons">
              <input
                value={number}
                onChange={(e) => {
                  const newNumbers = [...phoneNumbers];
                  newNumbers[index] = e.target.value;
                  setPhoneNumbers(newNumbers);
                }}
              />
              {index === phoneNumbers.length - 1 && (
                <button
                  type="button"
                  className="action-button add-input-button"
                  onClick={handleAddPhoneNumber}
                >
                  Add Phone Number
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="action-buttons">
          <button
            type="button"
            className="action-button save-button"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            type="button"
            className="action-button cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
