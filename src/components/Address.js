import React, { Component } from 'react'
import { Link , Navigate} from 'react-router-dom'
import { createBrowserHistory } from "history";
// import Contactform from './Contactform';
// import Description from './Description';
export default class Address extends Component {
 

 
  constructor(props) {
    super(props)
  
    this.state = {
        Contact_Owner : "",
       First_Name:"",
       Account_Name :"",
       Email:"",
       Phone : "",
       Other_Phone: "",
       Mobile:"",
       Assistant:"",
       Lead_Source:"",
       Mailing_State :"",
       Vendor_Name:"",
       Title: "",
       Department:"",
       Home_Phone:"",
       Fax:"",
       Date_of_Birth:"",
       Asst_Phone:"",
       Email_opt_out:"",
       Skype_ID:"",
       Secondary_Email:"",
       Twitter:"",
       Reporting_to:"",
    
    }
    this.handleusernameA=this.handleusernameA.bind(this)
    this.handleusernameB=this.handleusernameB.bind(this)

    this.handleusernameC=this.handleusernameC.bind(this)
    this.handleusernameD=this.handleusernameD.bind(this)

    this.handleusernameE=this.handleusernameE.bind(this)
    this.handleusernameF=this.handleusernameF.bind(this)
    this.handleusernameG=this.handleusernameG.bind(this)
    this.handleusernameH=this.handleusernameH.bind(this)
    this.handleusernameI=this.handleusernameI.bind(this)
    this.handleusernameJ=this.handleusernameJ.bind(this)
    this.handleusernameK=this.handleusernameK.bind(this)
    this.handleusernameL=this.handleusernameL.bind(this)
    this.handleusernameM=this.handleusernameM.bind(this)
    this.handleusernameN=this.handleusernameN.bind(this)
    this.handleusernameO=this.handleusernameO.bind(this)
    this.handleusernameP=this.handleusernameP.bind(this)
    this.handleusernameQ=this.handleusernameQ.bind(this)
    this.handleusernameR=this.handleusernameR.bind(this)
    this.handleusernameS=this.handleusernameS.bind(this)
    this.handleusernameT=this.handleusernameT.bind(this)
    this.handleusernameU=this.handleusernameU.bind(this)
    this.handleusernameV=this.handleusernameV.bind(this)




    this.history = createBrowserHistory();
  }
  handleusernameA(e){
    this.setState({
      Contact_Owner:e.target.value,
    
    
    })
    console.log(this.state.Contact_Owner)
  }
  handleusernameB(e){
    this.setState({
  First_Name:e.target.value
    })
    console.log(this.state.First_Name)
  }
  handleusernameC(e){
    this.setState({
  Account_Name:e.target.value
    })
    console.log(this.state.Account_Name)
  }

  handleusernameD(e){
    this.setState({
  Email:e.target.value
    })
    console.log(this.state.Email)
  }
handleusernameE(e){
    this.setState({
     Phone:e.target.value
    })
    console.log(this.state.Phone)
  }

  handleusernameF(e){
    this.setState({
 Other_Phone:e.target.value
    })
    console.log(this.state.Other_Phone)
  }
  handleusernameG(e){
    this.setState({
Mobile:e.target.value
    })
    console.log(this.state.Mobile)
  }
  handleusernameH(e){
    this.setState({
 Assistant:e.target.value
    })
    console.log(this.state.Assistant)
  }


  handleusernameI(e){
    this.setState({
  Lead_Source:e.target.value
    })
    console.log(this.state.Lead_Source)
  }
  handleusernameJ(e){
    this.setState({
  Mailing_State:e.target.value
    })
    console.log(this.state.Mailing_State)
  }

  handleusernameK(e){
    this.setState({
 Vendor_Name:e.target.value
    })
    console.log(this.Vendor_Name)
  }

handleusernameL(e){
    this.setState({
     Title:e.target.value
    })
    console.log(this.state.Title)
  }

  handleusernameM(e){
    this.setState({
     Department:e.target.value
    })
    console.log(this.state.Department)
  }
  handleusernameN(e){
    this.setState({
     Home_Phone:e.target.value
    })
    console.log(this.state.Home_Phone)
  }
  handleusernameO(e){
    this.setState({
     Fax:e.target.value
    })
    console.log(this.state.Fax)
  }
  handleusernameP(e){
    this.setState({
    Date_of_Birth:e.target.value
    })
    console.log(this.state.Date_of_Birth)
  }
  handleusernameQ(e){
    this.setState({
     Asst_Phone:e.target.value
    })
    console.log(this.state.Asst_Phone)
  }
  handleusernameR(e){
    this.setState({
     Email_opt_out:e.target.value
    })
    console.log(this.state.Email_opt_out)
  }
  handleusernameS(e){
    this.setState({
    Skype_ID:e.target.value
    })
    console.log(this.state.Skype_ID)
  }
  handleusernameT(e){
    this.setState({
     Secondary_Email:e.target.value
    })
    console.log(this.state.Secondary_Email)
  }
  handleusernameU(e){
    this.setState({
     Twitter:e.target.value
    })
    console.log(this.state.Twitter)
  }
  handleusernameV(e){
    this.setState({
    Reporting_to:e.target.value
    })
    console.log(this.state.Reporting_to)
  }


  resetform = () => {
    this.setState({

      Contact_Owner:"",
      First_Name:"",
      Account_Name:"",
      Email: "",
      Phone:"",
      Other_Phone:"",
      Mobile:"",
      Assistant:"",
      Lead_Source:"",
      Mailing_State :"",
      Vendor_Name:"",
      Title: "",
      Department:"",
      Home_Phone:"",
      Fax:"",
      Date_of_Birth:"",
      Asst_Phone:"",
      Email_opt_out:"",
      Skype_ID:"",
      Secondary_Email:"",
      Twitter:"",
      Reporting_to:"",
    });
  }
// calling api using fetch method of javascript
  addUser = async (formData) => {
    await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
    }).then(()=> {
      this.resetform()
      this.setState({
        register : "Registered Successfully"
      })
      alert("Registered successfully.")
    }).catch((e) => {
      alert("something went wrong.")
    })
  }
  handlesubmit = (e) => {
      e.preventDefault();
      const {Contact_Owner,First_Name,Account_Name, Email, Phone,Other_Phone,Mobile,Assistant ,Lead_Source,Last_Name,Vendor_Name, Title  ,Department,Home_Phone,Fax,Date_of_Birth,Asst_Phone,Email_opt_out,Skype_ID,Secondary_Email,Twitter,Reporting_to} = this.state;
      const formData = {
        Contact_Owner,First_Name,Account_Name, Email, Phone,Other_Phone,Mobile,Assistant,Lead_Source,Last_Name,Vendor_Name, Title  ,Department,Home_Phone,Fax,Date_of_Birth,Asst_Phone,Email_opt_out,Skype_ID,Secondary_Email,Twitter,Reporting_to
      }
      this.addUser(formData);
  }
 
  render() {
    return (
      <div className='secondpage'>
      
      {!this.state.register ? <div className='form-container1'>
        <h1 className='heading'>Contact Information</h1>
        <form className='registor-form' onSubmit={this.handlesubmit}>
         <label>Contact Owner:</label>
          <input type="text" placeholder='Enter Owner Name' value={this.state.Contact_Owner} onChange={this.handleusernameA} required  className="form-field1" />
          
   

          <label>Lead Source:</label>
          <input type="text" placeholder='Enter Lead' value={this.state.First_Name} onChange={this.handleusernameB}  required className="form-field2"  />


             <label> First Name:</label>
             <input type="text" placeholder='Enter Last Name' value={this.state.Mailing_State} onChange={this.handleusernameJ} required className="form-field3"  />
   


          <label> Last Name:</label>
          <input type="text" placeholder='Enter  Last Name' value={this.state.Account_Name} onChange={this.handleusernameC} required className="form-field4"  />

          <label>Account Name:</label>
          <input type="email" placeholder='Enter Your Account Name' value={this.state.Email} onChange={this.handleusernameD}  required className="form-field5"  />

          <label> Vendor Name:</label>
          <input type="text" placeholder=' Vendor Name' value={this.state.Vendor_Name} onChange={this.handleusernameK}  required className="form-field6"  />

<div className='laptop'>

  
<label>Email:</label>
          <input type="email" placeholder=' Enter Your  Email'value={this.state.Secondary_Email} onChange={this.handleusernameT}  required className="form-field7"  />

</div>
          <div className='laptop2'>
          <label> Title:</label>
          <input type="text" placeholder=' Title'value={this.state.Title} onChange={this.handleusernameL}  required className="form-field"  />
          </div>

         


          <label> Phone Number:</label>
          <input type="number" placeholder='Enter Your Phone no' value={this.state.Phone} onChange={this.handleusernameE}  required className="form-field9"  />
          
          <label> Department:</label>
          <input type="text" placeholder=' Department'value={this.state.Department} onChange={this.handleusernameM}  required className="form-field10"  />

          <div className='laptop5'>

<label> Other Phone:</label>
<input type="number" placeholder='Enter  Other Phone No 'value={this.state.Other_Phone} onChange={this.handleusernameF}  required className="form-field11"  /></div>

<div className='laptop4'>
          <label>Home Phone:</label>
          <input type="number" placeholder='Enter Mobile No 'value={this.state.Mobile} onChange={this.handleusernameG}  required className="form-field12"  />
</div>



<div className='laptop6'><label>Mobile:</label>
          <input type="number" placeholder=' Home Phone'value={this.state.Home_Phone} onChange={this.handleusernameN}  required className="form-field7"  />
</div>

       <div className='laptop7'>
           <label> Fax:</label>
           <input type="text" placeholder='Fax 'value={this.state.Fax} onChange={this.handleusernameO}  required className="form-field8"  />
       </div>

          <label>Assistant:</label>
          <input type="text" placeholder='Assistent details 'value={this.state.Assistant} onChange={this.handleusernameH}  required className="form-field16"  />

          






          <label>Date of Birth:</label>
          <input type="text" placeholder='Enter DOB'value={this.state.Date_of_Birth} onChange={this.handleusernameP}  required className="form-field7"  />

          {/* <label>Asst Phone:</label> */}
          <input type="number" placeholder=' Assistent No 'value={this.state.Asst_Phone} onChange={this.handleusernameQ}  required className="form-field13"  />


          {/* <label>Email_opt_out:</label> */}
          <input type="email" placeholder='Email opt-out  'value={this.state.Email_opt_out} onChange={this.handleusernameR}  required className="form-field14"  />


          {/* <label>Skype ID:</label> */}
          <input type="number" placeholder=' Skype ID'value={this.state.Skype_ID} onChange={this.handleusernameS}  required className="form-field14"  />


{/* { <label>Twitter:</label> } */}
          <input type="email" placeholder='Secondary Email'value={this.state.Twitter} onChange={this.handleusernameU}  required className="form-field14"  />


          <input type="text" placeholder='Twitter'value={this.state.Twitter} onChange={this.handleusernameU}  required className="form-field14"  />




          {/* <label>Reporting_to:</label> */}
          <input type="text" placeholder=' Report Here !'value={this.state.Reporting_to} onChange={this.handleusernameV}  required className="form-field14"  />


          


          <br></br>
          <br></br>
       
        </form>
        
      </div >:
     <Navigate to="/" />
      }
      </div>
    )
  }
}

