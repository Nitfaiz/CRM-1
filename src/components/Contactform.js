import React, { Component } from 'react'
import { Link , Navigate} from 'react-router-dom'
import { createBrowserHistory } from "history";
import Address from './Address';
import Description from './Description';
export default class Contactform extends Component {
 

  constructor(props) {
    super(props)
  
    this.state = {
       Mailing_street : "",
       Mailing_city:"",
       Mailing_State :"",
       Mailing_Zip:"",
       Mailing_Country: "",
     
    
    }
    this.handleusernameA=this.handleusernameA.bind(this)
    this.handleusernameB=this.handleusernameB.bind(this)

    this.handleusernameC=this.handleusernameC.bind(this)
    this.handleusernameD=this.handleusernameD.bind(this)

    this.handleusernameE=this.handleusernameE.bind(this)
    // this.handleusernameF=this.handleusernameF.bind(this)




    this.history = createBrowserHistory();
  }
  handleusernameA(e){
    this.setState({
      Mailing_street:e.target.value,
    })
    console.log(this.state.Mailing_street)
  }
  handleusernameB(e){
    this.setState({
  Mailing_city:e.target.value
    })
    console.log(this.state.Mailing_city)
  }
  handleusernameC(e){
    this.setState({
  Mailing_State:e.target.value
    })
    console.log(this.state.Mailing_State)
  }

  handleusernameD(e){
    this.setState({
 Mailing_Zip:e.target.value
    })
    console.log(this.Mailing_Zip)
  }

handleusernameE(e){
    this.setState({
     Mailing_Country:e.target.value
    })
    console.log(this.state.Mailing_Country)
  }


 

  resetform = () => {
    this.setState({

        Mailing_street : "",
        Mailing_city:"",
        Mailing_State :"",
        Mailing_Zip:"",
        Mailing_Country: "",
      
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
      const { Mailing_street,Mailing_city,Mailing_State,Mailing_Zip, Mailing_Country } = this.state;
      const formData = {
        Mailing_street,Mailing_city,Mailing_State,Mailing_Zip, Mailing_Country       }
      this.addUser(formData);
  }
 
  render() {
    return (
      <div className='secondpage'>
        <Address/>
        <Description/>
      {!this.state.register ? <div className='form-container2'>
        <h1 className='heading'>Address Information</h1>
        <form className='registor-form' onSubmit={this.handlesubmit}>


         <label>Mailing_street:</label>
          <input type="text" placeholder='Enter Mailing street' value={this.state.Mailing_street} onChange={this.handleusernameA} required  className="form-field form-field-signup" />
   

          <label>Mailing_city:</label>
          <input type="text" placeholder='Enter Your Mailing City' value={this.state.Mailing_city} onChange={this.handleusernameB}  required className="form-field form-field-signup"  />
   


          <label>Mailing_State:</label>
          <input type="text" placeholder='Enter  Mailing State' value={this.state.Mailing_State} onChange={this.handleusernameC} required className="form-field form-field-signup"  />
         
         

          <label> Mailing_Zip:</label>
          <input type="number" placeholder='Enter  Mailing Zip' value={this.state.Mailing_Zip} onChange={this.handleusernameD}  required className="form-field form-field-signup"  />

          <label> Mailing_Country:</label>
          <input type="text" placeholder='Enter  Mailing Country'value={this.state.Mailing_Country} onChange={this.handleusernameE}  required className="form-field form-field-signup"  />



          


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

