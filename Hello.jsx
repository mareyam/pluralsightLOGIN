import React from 'react';
import './hello.css';
import faded from './faded.jpg';
 
const Hello = () =>
{
    return (
        <div className='body'>
            <div className="login">
               
                    <div className="details_div">
                    <h1 className="pluralsight"><strong>plural sight</strong></h1>
                    <p className="login_p"><strong>Email or Username</strong></p>
                    <input className="login_input"type="text"></input>
                    <p className="login_p"><strong>Password</strong></p>
                    <input className="login_input" type="text"></input>
                    <button className="btn btn-primary sign_in"><strong>Sign in</strong></button>  

                    <a className="other1 " href="#">Forgot password?</a>
                    <a className="other1" href="#">Sign in with company or school</a> 
                    <hr/>
                    <button className="btn btn-secondary create_acc_button">Create an account</button>
                    <p className="other2">Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.</p>
                    <div className="a_div">
                <a className="other2" href="#">Terms of Use | </a>
                    <a className="other2" href="#">Privacy Policy</a>
                    </div>
                    </div>
            </div>
            <div className="design">
                <div className="design_h1">
                <h1 >Lets create the future <strong>together</strong></h1>
                <button className="trail">Start your 10 day trail now</button>
            </div>
               
            </div>
            
        </div>
    )
}
export default Hello;