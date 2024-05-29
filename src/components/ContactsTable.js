// src/components/ContactsTable.js
import React from "react";

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Country</th>
          <th>Emails</th>
          <th>Phone Numbers</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>{contact.name}</td>
            <td>{contact.lastName}</td>
            <td>{contact.address}</td>
            <td>{contact.city}</td>
            <td>{contact.country}</td>
            <td>{contact.emails.join(", ")}</td>
            <td>{contact.phoneNumbers.join(", ")}</td>
            <td>
              <button className="action-button" onClick={() => onEdit(index)}>
                Edit
              </button>
            </td>
            <td>
              <button
                className="action-button delete-button"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactsTable;
