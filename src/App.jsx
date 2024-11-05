import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

function App() {
    const [selectedContactId, setSelectedContactId] = useState(null);

    return (
        <div>
            <h1>Contact List</h1>
            {selectedContactId === null ? (
                <ContactList onSelectContact={setSelectedContactId} />
            ) : (
                <SelectedContact
                    contactId={selectedContactId}
                    onBack={() => setSelectedContactId(null)}
                />
            )}
        </div>
    );
}

export default App;


