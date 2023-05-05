import React, { useContext } from 'react'
import "../css/AddLecture.css"
import Navbar from './Navbar'

export default function AddLecture(props) {

  return (
    <div>
    <Navbar/>
    <div className="container mt-3">
        <div class="card" style={{ width: "80vw"}}>
            <h2 class="card-header">
                Add Lecture
            </h2>
            <form class="card-body"  >
                <div class="form-floating">
                    <div class="form-floating mb-3" style={{ width: "70vw"}}>
                        <input type="text" className="form-control" id="subject" placeholder="Subject" name="Subject" required/>
                        <label htmlFor="floatingInput">Subject</label>
                    </div>
                    <div class="form-floating mb-3" style={{ width: "70vw"}}>
                        <input type="text" className="form-control" id="location" placeholder="Location" name="Location" required/>
                        <label htmlFor="floatingInput">Location</label>
                    </div>
                    <div class="form-floating mb-3" style={{ width: "70vw"}}>
                        <input type="text" className="form-control" id="faculty" placeholder="Faculty" name="Faculty" required/>
                        <label htmlFor="floatingInput">Faculty</label>
                    </div>
                    <div class="row">
                        <div class="col" style={{display:"flex"}}>
                            <input type="text" class="form-control" placeholder="Start Time" aria-label="Start Time" style={{width:"30vw"}}/>
                            <select class="form-select" aria-label="Default select example" >
                                <option selected>AM</option>
                                <option value="1">PM</option>
                            </select>
                        </div>
                        <div class="col" style={{display:"flex"}}>
                            <input type="text" class="form-control" placeholder="End Time" aria-label="End Time" style={{width:"30vw"}}/>
                            <select class="form-select" aria-label="Default select example" >
                                <option selected>AM</option>
                                <option value="1">PM</option>
                            </select>
                        </div>
                    </div>
                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </form>
        </div>
    </div>
    </div>
    )
}
