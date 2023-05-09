import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Informationform.css";
import AuthContext from "../context/AuthContext";
import { db } from "../firebase_config";
import { doc, setDoc } from "firebase/firestore";

export default function Informationform() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.user);
  const [isStudent, setIsStudent] = useState(true);
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    branch: "",
    class: "",
    div: "",
    prn: "",
    roll: "",
    empId: "",
    phone: "",
  });

  console.log(userDetails);

  const onChangeHandler = (e) => {
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [e.target.id]: e.target.value,
    }));
  };
  let navigate = useNavigate();

  const radio1call = () => {
    console.log("true");
    setIsStudent(true);
  };
  const radio2call = () => {
    setIsStudent(false);
    console.log("false");
  };
  const handleSubmit = async (e) => {
    await setDoc(doc(db, "users", authCtx.user.uid), {
      ...userDetails,
      uid: authCtx.user.uid,
      email: authCtx.user.email,
    })
      .then((val) => {
        navigate("/home", { replace: true });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="abcd">
        <div className="boxes">
          {isStudent && <div className="imagesection" id="imagesection1"></div>}
          {!isStudent && (
            <div className="imagesection" id="imagesection2"></div>
          )}
          <div className="information1">
            <div className="radio">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="Radio1"
                  onClick={() => radio1call()}
                  defaultChecked={true}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Student
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={() => radio2call()}
                />
                <label className="form-check-label" htmlFor="Radio2">
                  Faculty
                </label>
              </div>
            </div>
            <div className="form1">
              <h3>Fill Information</h3>
              <div className="line"></div>
              {isStudent && (
                <form id="studentform" action="">
                  <div className="fullname">
                    <div className="col">
                      <input
                        type="text"
                        name="fname"
                        id="fname"
                        style={{ padding: "2px", paddingLeft: "10px" }}
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                        onChange={onChangeHandler}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="lname"
                        id="lname"
                        style={{ padding: "2px", paddingLeft: "10px" }}
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="branch">
                    <select
                      id="branch"
                      name="branch"
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                      defaultValue="0"
                      onChange={onChangeHandler}
                    >
                      <option value="0">Branch</option>
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="E&TC">E&TC</option>
                    </select>
                  </div>
                  <div className="year-division">
                    <select
                      id="class"
                      name="class"
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                      defaultValue="0"
                      onChange={onChangeHandler}
                    >
                      <option value="0">ClassName</option>
                      <option value="FY">FY</option>
                      <option value="SY">SY</option>
                      <option value="TY">TY</option>
                    </select>
                    <select
                      id="div"
                      name="div"
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                      defaultValue="0"
                      onChange={onChangeHandler}
                    >
                      <option value="0">Division</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </div>
                  <div className="fullname">
                    <div className="col">
                      <input
                        type="text"
                        id="prn"
                        name="prn"
                        style={{ padding: "2px", paddingLeft: "10px" }}
                        className="form-control"
                        placeholder="Prn No."
                        aria-label="prn"
                        onChange={onChangeHandler}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="roll"
                        name="roll"
                        style={{ padding: "2px", paddingLeft: "10px" }}
                        className="form-control"
                        placeholder="Roll No."
                        aria-label="roll"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="form-check validation">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Above Information is Correct
                    </label>
                  </div>
                  <div className="subbtn">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}

              {!isStudent && (
                <form id="facultyform" action="">
                  <div className="facfullname">
                    <div className="col">
                      <input
                        type="text"
                        name="fname"
                        id="fname"
                        style={{ padding: "2px", paddingLeft: "10px" }}
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                        onChange={onChangeHandler}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="lname"
                        id="lname"
                        style={{ padding: "2px", paddingLeft: "10px" }}
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="branch">
                    <select
                      className="form-select form-select-sm"
                      id="branch"
                      name="branch"
                      aria-label=".form-select-sm example"
                      defaultValue="0"
                      onChange={onChangeHandler}
                    >
                      <option value="0">Branch</option>
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="E&TC">E&TC</option>
                    </select>
                  </div>
                  <div className="fullname">
                    <div className="col">
                      <input
                        type="text"
                        id="empId"
                        name="empId"
                        style={{ padding: "2px", paddingLeft: "10px" }}
                        className="form-control"
                        placeholder="Employee ID"
                        aria-label="empid"
                        onChange={onChangeHandler}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        style={{ padding: "2px", paddingLeft: "10px" }}
                        className="form-control"
                        placeholder="Phone No."
                        aria-label="phn"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="form-check validation">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Above Information is Correct
                    </label>
                  </div>
                  <div className="subbtn">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
