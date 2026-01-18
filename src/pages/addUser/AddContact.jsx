import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../Context/ContactContext";

export default function AddContact() {
  const { addContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!contact.firstName || !contact.email || !contact.phone) {
      alert("Please fill all fields");
      return;
    }

    // add new contact via Context (json-server)
    await addContact(contact);

    // redirect to home
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={contact.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={contact.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={contact.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={contact.phone}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </form>
    </div>
  );
}
