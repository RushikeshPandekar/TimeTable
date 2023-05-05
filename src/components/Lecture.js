import React, { useContext } from 'react'
import "../css/Lecture.css"
import LectureContext from '../context/LectureContext'

export default function Lecture() {
  const context=useContext(LectureContext);
  const {lecture}=context;
  return (
    <div>
        <div class="lecture">
            <div class="time">
                <h3>{lecture.startTime}</h3>
                <h5>{lecture.ampm}</h5>
            </div>
            <div class="subjectAndInfo">
                <h3>{lecture.subject}</h3>
                <h5>{lecture.location}</h5>
                <h5>{lecture.faculty}</h5>
            </div>
        </div>


        {/* <div class="lecture">
            <div class="time">
                <h3>{props.time.starttime}</h3>
                <h5>{props.time.ampm}</h5>
            </div>
            <div class="subjectAndInfo">
                <h3>{props.lecture.subject}</h3>
                <h5>{props.lecture.location}</h5>
                <h5>{props.lecture.faculty}</h5>
            </div>
        </div> */}
    </div>
  )
}
