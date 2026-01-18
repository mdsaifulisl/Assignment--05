import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = "http://localhost:5000/contacts";

  // Fetch contacts
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  // Add contact
  const addContact = async (contact) => {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });
    const data = await res.json();
    setContacts((prev) => [...prev, data]);
  };

  // Update contact
  const updateContact = async (contact) => {
    const res = await fetch(`${apiUrl}/${contact.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });
    const data = await res.json();
    setContacts((prev) =>
      prev.map((c) => (c.id === data.id ? data : c))
    );
  };

  // Delete contact
  const deleteContact = async (id) => {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchContacts();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        loading,
        addContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
