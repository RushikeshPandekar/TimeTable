import React, { useContext, useEffect, useState } from "react";
import "../css/Home.css";
import Navbar from "./Navbar";
import TTDay from "./TTDay";
import AuthContext from "../context/AuthContext";
import { db } from "../firebase_config";
import { getDocs, collection } from "firebase/firestore";

export default function Home() {
  const authCtx = useContext(AuthContext);
  const [ttData, setTTData] = useState([]);
  console.log(ttData);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  let dateGreeting = weekday[date.getDay()];
  dateGreeting += `, ${date.getDate()}`;
  if (dateGreeting[-1] === "1") dateGreeting += "st ";
  else if (dateGreeting[-1] === "2") dateGreeting += "nd ";
  else if (dateGreeting[-1] === "3") dateGreeting += "rd ";
  else dateGreeting += "th ";
  dateGreeting += date.toLocaleString("default", { month: "long" });
  dateGreeting += `, ${date.getFullYear()}`;

  useEffect(() => {
    const collectionDays = [
      "monday",
      "tuesday",
      "wednesday",
      "thrusday",
      "friday",
      "saturday",
    ];
    const getUserDataFromDB = async (student, div?) => {
      // const docRef = doc(db, "lectures", "sNq3bFQWQ0rCHjFai4Ei");
      for (let i = 0; i <= 5; i++) {
        const docSnap = await getDocs(
          collection(db, "lectures", "sNq3bFQWQ0rCHjFai4Ei", collectionDays[i])
        );
        let docLects = [];
        docSnap.forEach((doc) => {
          docLects = [...docLects, doc.data()];
        });
        setTTData((prevTTData) => [...prevTTData, docLects]);
      }
    };
    getUserDataFromDB();
  }, []);

  return (
    <div>
      <Navbar />
      <div class="box">
        <div class="todaysInformation">
          <div class="information">
            <div>
              <h3 class="date">{dateGreeting}</h3>
              <h1>
                Hi{" "}
                {`${authCtx.userCompleteDetails.fname} ${authCtx.userCompleteDetails.lname}`}
                ,
              </h1>
              <p>
                VIIT Pune,
                {authCtx.userCompleteDetails.empId === ""
                  ? ` Div: ${authCtx.userCompleteDetails.div}`
                  : ""}
              </p>
              <p>Your Schedule</p>
            </div>
            <div className="image"></div>
          </div>
          <div
            id="carouselExampleControls"
            class="carousel slide TimeTable"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <TTDay Day="Monday" data={ttData[0]} />
            </div>
            <div class="carousel-inner">
              <TTDay Day="Tuesday" data={ttData[1]} />
            </div>
            <div class="carousel-inner">
              <TTDay Day="Wednesday" data={ttData[2]} />
            </div>
            <div class="carousel-inner">
              <TTDay Day="Thursday" data={ttData[3]} />
            </div>
            <div class="carousel-inner">
              <TTDay Day="Friday" data={ttData[4]} />
            </div>
            <div class="carousel-inner">
              <TTDay Day="Saturday" data={ttData[5]} />
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon arrowBtn"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon arrowBtn"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
