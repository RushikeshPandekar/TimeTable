import React from 'react'
import "../css/TTDay.css"
import Lecture from './Lecture'


export default function TTDay(props) {
  return (
    <div>
        <div class="carousel-item active">
                    <h1>{props.Day}</h1>
                    <div class="showTT">
                        <Lecture/>
                        <Lecture/>
                        <Lecture/>
                        <Lecture/>
                        <Lecture/>
                        <Lecture/>
                    </div>
        </div>
    </div>
  )
}
