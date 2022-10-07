import React, { Component } from 'react'
import { Link , Navigate} from 'react-router-dom'
import { createBrowserHistory } from "history";
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
         {/* <label>Contact_Owner:</label> */}
          <input type="text" placeholder='Enter Owner Name' value={this.state.Contact_Owner} onChange={this.handleusernameA} required  className="form-field form-field-signup1" />
   

          {/* <label>First_Name:</label> */}
          <input type="text" placeholder='Enter Your First Name' value={this.state.First_Name} onChange={this.handleusernameB}  required className="form-field form-field-signup2"  />
   


          {/* <label> Account_Name:</label> */}
          <input type="text" placeholder='Enter  Account Name' value={this.state.Account_Name} onChange={this.handleusernameC} required className="form-field form-field-signup3"  />
         
          {/* <label> Email:</label> */}
          <input type="email" placeholder='Enter Your Email' value={this.state.Email} onChange={this.handleusernameD}  required className="form-field form-field-signup4"  />


          {/* <label> Phone:</label> */}
          <input type="number" placeholder='Enter Your Phone no' value={this.state.Phone} onChange={this.handleusernameE}  required className="form-field form-field-signup5"  />

          {/* <label> Other_Phone:</label> */}
          <input type="number" placeholder='Enter  Other Phone No 'value={this.state.Other_Phone} onChange={this.handleusernameF}  required className="form-field form-field-signup6"  />

          {/* <label>Mobile:</label> */}
          <input type="number" placeholder='Enter Mobile No 'value={this.state.Mobile} onChange={this.handleusernameG}  required className="form-field form-field-signup7"  />


          {/* <label>Assistant:</label> */}
          <input type="text" placeholder='Assistent details 'value={this.state.Assistant} onChange={this.handleusernameH}  required className="form-field form-field-signup8"  />

          {/* <label>Lead_Source:</label> */}
          <input type="number" placeholder='Enter Score' value={this.state.Lead_Source} onChange={this.handleusernameI}  required className="form-field form-field-signup9"  />
          
          {/* <label>Mailing_State:</label> */}
          <input type="text" placeholder='Enter Last Name' value={this.state.Mailing_State} onChange={this.handleusernameJ} required className="form-field form-field-signup10"  />

          {/* <label> Vendor_Name:</label> */}
          <input type="number" placeholder=' Vendor Name' value={this.state.Vendor_Name} onChange={this.handleusernameK}  required className="form-field form-field-signup11"  />


          {/* <label> Title:</label> */}
          <input type="text" placeholder=' Title'value={this.state.Title} onChange={this.handleusernameL}  required className="form-field form-field-signup12"  />

          {/* <label> Department:</label> */}
          <input type="text" placeholder=' Department'value={this.state.Department} onChange={this.handleusernameM}  required className="form-field form-field-signup13"  />

{/* 
          <label>Home_Phone:</label> */}
          <input type="number" placeholder=' Title'value={this.state.Home_Phone} onChange={this.handleusernameN}  required className="form-field form-field-signup14"  />


          {/* <label> Fax:</label> */}
          <input type="text" placeholder='Fax 'value={this.state.Fax} onChange={this.handleusernameO}  required className="form-field form-field-signup15"  />


          {/* <label>Date_of_Birth:</label> */}
          <input type="text" placeholder='Enter DOB'value={this.state.Date_of_Birth} onChange={this.handleusernameP}  required className="form-field form-field-signup16"  />


          {/* <label>Asst_Phone:</label> */}
          <input type="number" placeholder=' Type Here !'value={this.state.Asst_Phone} onChange={this.handleusernameQ}  required className="form-field form-field-signup17"  />

          {/* <label>Email_opt_out:</label> */}
          <input type="number" placeholder=' Type Here !'value={this.state.Email_opt_out} onChange={this.handleusernameR}  required className="form-field form-field-signup18"  />


          {/* <label>Skype_ID:</label> */}
          <input type="number" placeholder=' Type Here !'value={this.state.Skype_ID} onChange={this.handleusernameS}  required className="form-field form-field-signup19"  />


          {/* <label>Secondary_Email:</label> */}
          <input type="number" placeholder=' Type Here !'value={this.state.Secondary_Email} onChange={this.handleusernameT}  required className="form-field form-field-signup1"  />

{/* 
          <label>Twitter:</label> */}
          <input type="number" placeholder=' Type Here !'value={this.state.Twitter} onChange={this.handleusernameU}  required className="form-field form-field-signup1"  />

          {/* <label>Reporting_to:</label> */}
          <input type="text" placeholder=' Report Here !'value={this.state.Reporting_to} onChange={this.handleusernameV}  required className="form-field form-field-signup1"  />


          


          <br></br>
          <br></br>
        
          <button>Submit</button>
          <div className='sign-up'>
        
          </div>
        </form>
        
      </div >:
     <Navigate to="/" />
      }
      </div>
    )
  }
}

