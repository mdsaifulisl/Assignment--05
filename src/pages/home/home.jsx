import { useState, useContext } from "react";
import ContactList from "../../components/ContactList";
import ShowContact from "../../components/ShowContact";
import EditContact from "../../components/EditContact";
import { ContactContext } from "../../Context/ContactContext";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const { contacts, deleteContact, updateContact, loading } =
    useContext(ContactContext);
  const [searchText, setSearchText] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filterType, setFilterType] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [editContact, setEditContact] = useState(null);

  // Show modal
  const handleShow = (contact) => setSelectedContact(contact);
  const handleClose = () => setSelectedContact(null);

  // Edit modal
  const handleEdit = (contact) => setEditContact(contact);

  const handleUpdate = (updatedContact) => {
    updateContact(updatedContact);
    setEditContact(null);
  };

  // Delete contact
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteContact(id);
    }
  };

  // Loading
  if (loading) return <p className="text-center p-1 mt-5">Loading...</p>;

  // 🔍 Search
  const handleSearch = () => {
    setSearchQuery(searchText);
  };
  let filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  // 🔽 Filter
  if (filterType === "firstName")
    filteredContacts.sort((a, b) => a.firstName.localeCompare(b.firstName));

  if (filterType === "lastName")
    filteredContacts.sort((a, b) => a.lastName.localeCompare(b.lastName));

  return (
    <div className="container mt-4">
      {/* Search & Filter */}
      <div className="top-bars justify-content-between mb-3 d-flex gap-2 p-3 ">
        <div className="input-seacth d-flex gap-2 align-items-center">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch} className="btn-show">
            <FaSearch className="fs-6 fw-bold"/>
          </button>
        </div>
        <select
          className="form-select w-25"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">Filter</option>
          <option value="firstName">First Name (A-Z)</option>
          <option value="lastName">Last Name (A-Z)</option>
        </select>
      </div>

      {/* Contact List */}
      <ContactList
        contacts={filteredContacts}
        onShow={handleShow}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Show Modal */}
      {selectedContact && (
        <ShowContact
          contact={selectedContact}
          onClose={handleClose}
          onEdit={handleEdit}
        />
      )}

      {/* Edit Modal */}
      {editContact && (
        <EditContact
          contact={editContact}
          onClose={() => setEditContact(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}
