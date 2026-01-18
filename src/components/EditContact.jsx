import { useState } from "react";

const EditContact = ({ contact, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    firstName: contact.firstName || "",
    lastName: contact.lastName || "",
    email: contact.email || "",
    phone: contact.phone || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate({
      ...contact,
      ...formData,
    });

    onClose();
  };

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">Edit Contact</h4>
          <button className="btn-delete" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-flex justify-content-end gap-2 mt-3">
            <button type="submit" className="btn-edit">
              Update
            </button>
            <button type="button" className="btn-show" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
