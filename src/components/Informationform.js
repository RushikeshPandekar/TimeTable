import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import "../css/Informationform.css"

export default function Informationform() {
    const [isStudent,setIsStudent]=useState(true);
    let navigate = useNavigate();

    const radio1call=()=>{
        console.log('true');
        setIsStudent(true);
    }
    const radio2call=()=>{
        setIsStudent(false);
        console.log('false');

    }
    const handleSubmit=async(e)=>{
        navigate("/home", {replace: true});
    }
  return (
    <div>
        <div class="abcd">
        <div class="boxes">
            {isStudent && <div class="imagesection" id="imagesection1">
            </div>}
            {!isStudent && <div class="imagesection" id="imagesection2">
            </div>}
            <div class="information1">
                <div class="radio">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Radio1" onClick={()=>radio1call()} checked/>
                        <label class="form-check-label" for="flexRadioDefault2">
                        Student
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>radio2call()}/>
                        <label class="form-check-label" for="Radio2">
                            Faculty
                        </label>
                    </div>
                </div>
                <div class="form1">
                    <h3>Fill Information</h3>
                    <div class="line"></div>
                    {isStudent && <form id="studentform" action="">
                        <div class="fullname">
                            <div class="col">
                              <input type="text" style={{padding:"2px", paddingLeft : "10px"}}class="form-control" placeholder="First name" aria-label="First name"/>
                            </div>
                            <div class="col">
                              <input type="text" style={{padding:"2px", paddingLeft : "10px"}} class="form-control" placeholder="Last name" aria-label="Last name"/>
                            </div>
                        </div>
                        <div class="branch">
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Branch</option>
                                <option value="1">CSE</option>
                                <option value="2">IT</option>
                                <option value="3">E&TC</option>
                            </select>
                        </div>
                        <div class="year-division">
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Class</option>
                                <option value="1">FY</option>
                                <option value="2">SY</option>
                                <option value="3">TY</option>
                            </select>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Division</option>
                                <option value="1">A</option>
                                <option value="2">B</option>
                                <option value="3">C</option>
                                <option value="4">D</option>
                            </select>
                        </div>
                        <div class="fullname">
                            <div class="col">
                              <input type="text" style={{padding:"2px", paddingLeft : "10px"}} class="form-control" placeholder="Prn No." aria-label="prn"/>
                            </div>
                            <div class="col">
                              <input type="text" style={{padding:"2px", paddingLeft : "10px"}} class="form-control" placeholder="Roll No." aria-label="roll"/>
                            </div>
                        </div>
                        <div class="form-check validation">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label class="form-check-label" for="invalidCheck">
                               Above Information is Correct
                            </label>
                        </div>
                        <div class="subbtn">
                            <button type="submit"class="btn btn-primary" onClick={()=>handleSubmit()}>Submit</button>
                        </div>
                    </form>}

                   {!isStudent && <form id="facultyform" action="">
                        <div class="facfullname">
                            <div class="col">
                              <input type="text" style={{padding:"2px", paddingLeft : "10px"}}class="form-control" placeholder="First name" aria-label="First name"/>
                            </div>
                            <div class="col">
                              <input type="text" style={{padding:"2px", paddingLeft : "10px"}} class="form-control" placeholder="Last name" aria-label="Last name"/>
                            </div>
                        </div>
                        <div class="branch">
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Branch</option>
                                <option value="1">CSE</option>
                                <option value="2">IT</option>
                                <option value="3">E&TC</option>
                            </select>
                        </div>
                        <div class="fullname">
                            <div class="col">
                              <input type="text" style={{padding:"2px", paddingLeft : "10px"}}class="form-control" placeholder="Employee ID" aria-label="empid"/>
                            </div>
                            <div class="col">
                              <input type="text" style={{padding:"2px", paddingLeft : "10px"}}class="form-control" placeholder="Phone No." aria-label="phn"/>
                            </div>
                        </div>
                        <div class="form-check validation">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label class="form-check-label" for="invalidCheck">
                               Above Information is Correct
                            </label>
                        </div>
                        <div class="subbtn">
                            <button type="submit"class="btn btn-primary" onClick={()=>handleSubmit()}>Submit</button>
                        </div>
                    </form>}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
