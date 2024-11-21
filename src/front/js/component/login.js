import React from 'react'

const Login = () => {
    return (
        <div className='container '>
            <div className='row m-5'>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email </label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    <label for="inputPassword5" className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"></input>
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                </div>
            </div >
            <div >
                <h1>boton</h1>
                <input className="btn btn-primary" type="submit" value="Submit"></input>
            </div>
        </div>
    )
}

export default Login
