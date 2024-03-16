import {useState} from "react";
import Input from "../components/Input";
import "../styles/userform.css";

function Userform() {
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [flag, setFlag] = useState(true);
  const [show, setShow] = useState(false);

  function handleFlag() {
    setFlag((flag) => !flag);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShow(true);
    if (
      !(id == "" || fname == "" || lname == "" || contact == "" || city == "")
    ) {
      localStorage.setItem(
        String(id),
        JSON.stringify({
          first_name: fname,
          last_name: lname,
          contact: contact,
          city: city,
        })
      );
    }
  }

  function handleClear(e) {
    e.preventDefault();
    setId("");
    setFname("");
    setLname("");
    setContact("");
    setCity("");
    setShow(false);
  }

  return (
    <>
      <h3 className="userform-heading">User Form</h3>
      <div className="total">
        <div className="userform">
          <form autoComplete="off">
            <Input
              id="userId"
              text="Enter the user ID : "
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <Input
              id="fname"
              text="Enter your first name : "
              placeholder="First name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <Input
              id="lname"
              text="Enter your last name : "
              placeholder="Last name"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
            <Input
              id="contact"
              text="Enter your phone no. : "
              placeholder="0123456789"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
            <Input
              id="city"
              text="Enter your city : "
              placeholder="Gondia"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <div className="terms">
              <input type="checkbox" id="tnc" onClick={handleFlag} />
              <label htmlFor="tnc">Accept Terms and Conditions</label>
            </div>
            <div className="userformbuttons">
              <button
                className="userformbtn"
                type="submit"
                disabled={flag}
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button className="userformbtn" onClick={handleClear}>
                Clear
              </button>
            </div>
          </form>
        </div>
        <div className="table">
          {show && (
            <table>
              <tbody>
                <tr>
                  <td>First Name : </td>
                  <td>{fname}</td>
                </tr>
                <tr>
                  <td>Last Name : </td>
                  <td>{lname}</td>
                </tr>
                <tr>
                  <td>Contact : </td>
                  <td>{contact}</td>
                </tr>
                <tr>
                  <td>City : </td>
                  <td>{city}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Userform;
