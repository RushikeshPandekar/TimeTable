import React from 'react'
import "../css/Home.css"
import Navbar from './Navbar'
import TTDay from './TTDay'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <div class="box">
        <div class="todaysInformation">
            <div class="information">
                <div>
                    <h3 class="date">Monday , Apr 17 , 2023</h3>
                    <h1>Hi Rushikesh ,</h1>
                    <p>VIIT pune , Div : A</p>
                    <p>Your Schedule</p>
                </div>
                <div className="image"></div>
            </div>
            <div id="carouselExampleControls" class="carousel slide TimeTable" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <TTDay Day="Monday"/>
                    <TTDay Day="Tuesday"/>
                    <TTDay Day="Wednesday"/>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon arrowBtn" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon arrowBtn" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}
