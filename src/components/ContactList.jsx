const ContactList = ({ contacts, onShow, onEdit, onDelete }) => {
  if (!contacts.length) {
    return <p className="no-data">No Contact Information</p>;
  }

  return (
    <div className="table-responsive mt-4">
      <table className="table contact-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact.id}>
              <td>{index + 1}</td>
              <td>{contact.firstName} {contact.lastName}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <div className="contact-actions">
                  <button className="btn-show" onClick={() => onShow(contact)}>
                    Show
                  </button>
                  <button className="btn-edit" onClick={() => onEdit(contact)}>
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => onDelete(contact.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
