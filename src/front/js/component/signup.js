import React from 'react'

const Signup = () => {
  return (
    <div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="María Perez"></input>
          <label for="floatingInput">Nombre Completo</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
          <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
          <label for="floatingPassword">Password</label>
      </div></div>
  )
}

export default Signup