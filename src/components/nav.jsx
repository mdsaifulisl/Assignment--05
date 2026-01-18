import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  const handleAddContact = () => {
    navigate("/add");
  };
  return (
    <>
      <header className="py-3">
        <div className="container">
          <div className="header d-flex justify-content-between align-items-center">
            <div className="header_logo">
              <h5 className="logo_h1">Contact Manager</h5>
            </div>
            <div className="header_nav">
              <ul className="d-flex gap-4 list-unstyled align-items-center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <button onClick={handleAddContact} className="btn btn-primary">
                  Add Contact
                </button>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
