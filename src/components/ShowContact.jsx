const ShowContact = ({ contact, onClose, onEdit }) => {
  if (!contact) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">Contact Details</h4>
          <button className="btn-delete" onClick={onClose}>
            ✕
          </button>
        </div>

        <p><strong>First Name:</strong> {contact.firstName}</p>
        <p><strong>Last Name:</strong> {contact.lastName}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>

        <div className="d-flex justify-content-end gap-2 mt-3">
          <button className="btn-edit" onClick={() => onEdit(contact)}>
            Edit
          </button>
          <button className="btn-show" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowContact;
