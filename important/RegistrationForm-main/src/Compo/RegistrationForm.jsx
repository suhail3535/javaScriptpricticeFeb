import React from 'react'
import "./registrationForm.css"
import { useForm } from 'react-hook-form'
const RegistrationForm = () => {

 const {register,handleSubmit,formState: { errors }}=useForm();
  
 const submittedData = (data)=>{
  console.log(data)
 }
  return (
    <div className='MainContainerContent'>
      <div className='MainContainerContentTop'>
        <h1>REGISTRATION FORM</h1>
      </div>
      <div className='MainContainerContentBottom'>
        <form className='formContainer' onSubmit={handleSubmit(submittedData)}>
          <div className='CommonDivStyle'>
            <div>
              <label>First Name<span style={{ color: "red" }}>*</span></label> <br /> <br />
              <input className='CommonInputStyle myInput' type="text"  {...register("userName",{required:"Enter First Name",maxLength: 20 })}/>
               {errors.userName && <p style={{ color: "red" }}>{errors.userName?.message}</p>}
               {/* {errors.userName ? <p style={{ color: "red" }}>{errors.userName?.message}</p>:<p style={{ color: "green" }}>Correct</p>} */}
                
            </div>
            <div>
              <label>Last Name<span style={{ color: "red" }}>*</span></label> <br /><br />
              <input className='CommonInputStyle' type="text"  {...register("LastName",{required:"Enter Last Name", maxLength:25})}/>
              {errors.LastName && <p style={{ color: "red" }}>{errors.LastName?.message}</p>} 
            </div>
          </div>

          <div className='CommonDivStyle'>
            <div>
              <label>Mob No<span style={{ color: "red" }}>*</span></label><br /><br />
              <input className='CommonInputStyle' type="number"  {...register("userNumber",{required:"Enter Mob No", maxLength:10})}/>
              {errors.userNumber && <p style={{ color: "red" }}>{errors.userNumber.message}</p>}
            </div>
            <div>
              <label>Email ID<span style={{ color: "red" }}>*</span></label><br /><br />
              <input className='CommonInputStyle' type="email"  {...register("userEmail",{required:"Enter EmailId"})}/>
              {errors.userEmail && <p style={{ color: "red" }}>{errors.userEmail.message}</p>}
            </div>
          </div>

          <div className='CommonDivStyle'>
            <div>
              <label>Course<span style={{ color: "red" }}>*</span></label><br /><br />
               

              <select name="courses" id="myCourses" class="CommonInputStyle" {...register("userCourses")}>
                <option value="Course">Course</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="Data Science">Data Science</option>
                <option value="Advance Software">Advance Software</option>
                <option value="Backend Developer">Backend Developer</option>
                </select>
                {/* {errors.userCourses==="Course" && <p style={{ color: "red" }}>{errors.userCourses.message}</p>} */}
            </div>
            <div>
              <label>High Qualification<span style={{ color: "red" }}>*</span></label><br /><br />
              <input className='CommonInputStyle' type="text"  {...register("userHighQualification",{required:"Enter Your Higher Qualification"})}/>
              {errors.userHighQualification && <p style={{ color: "red" }}>{errors.userHighQualification.message}</p>}
            </div>
          </div>

          <div className='CommonDivStyle'>
            <div>
              <label>Year Graduation<span style={{ color: "red" }}>*</span></label><br /><br />
              <select name="gradu" id="draducationYeadr" class="CommonInputStyle" {...register("userYearGraduation")}>
                <option value="Year">Year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                </select>
               {errors.userYearGraduation && <p style={{ color: "red" }}>{errors.userYearGraduation.message}</p>}
            </div>
            <div>
              <label>State<span style={{ color: "red" }}>*</span></label><br /><br />

              <select name="state" id="state" class="CommonInputStyle" {...register("userState")}>
              <option value="State">State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
               {/* {errors.userState && <p style={{ color: "red" }}>{errors.userState.message}</p>} */}

            </div>
          </div>

          <div className='CommonDivStyle'>
            <div>
              <label>What Is The Objective Of Your Participation ?<span style={{ color: "red" }}>*</span></label><br /><br />
              <textarea className='myTextArea' type="text"  {...register("userObjective",{required:"Enter Your Objective", maxLength:200})}></textarea>
              {errors.userObjective && <p style={{ color: "red" }}>{errors.userObjective?.message}</p>}
            </div>

            <div>
              <label>Why You Want To Join ?<span style={{ color: "red" }}>*</span></label><br /><br />
              <textarea className='myTextArea' type="text"  {...register("userAim",{required:"Enter here, why you want to join?", maxLength:200})}></textarea>
              {errors.userAim && <p style={{ color: "red" }}>{errors.userAim?.message}</p>}
            </div>

          </div>
          <div className='rgistercontainer'>
            <button className='Registerbtn'>Submit Details</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm
