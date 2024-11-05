import React, { useState, useEffect } from 'react';

function SelectedContact({ contactId, onBack }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    }
    fetchContact();
  }, [contactId]);

  if (!contact) {
    return <div>Loading contact details...</div>;
  }

  return (
    <div>
      <button onClick={onBack}>Back to Contact List</button>
      <h2>{contact.name}'s Details</h2>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Username:</strong> {contact.username}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Website:</strong> {contact.website}</p>
      <p><strong>Company:</strong> {contact.company.name}</p>
      <p><strong>Address:</strong> {contact.address.street}, {contact.address.city}</p>
    </div>
  );
}

export default SelectedContact;
