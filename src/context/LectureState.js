import React, { useState } from 'react'
import LectureContext from './LectureContext'

export default function LectureState(props) {

    const [lecture,setLecture]=useState({subject:"Cloud Computing",location:"B-301,comp department",faculty:"Vidya Gaikwad",ampm:"AM",startTime:"7:00"});
  return (
    <LectureContext.Provider value={{lecture,setLecture}}>
        {props.children}
    </LectureContext.Provider>
  )
}
