import React from "react";

const Login = () => {
  return (
    <div>
      <h3>Login</h3>
      <form action="">
        <div className="">
          <div className="col-md-6 col-sm-12">
            <label htmlFor="">Email</label>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="">
          <div className="col-md-6 col-sm-12">
            <label htmlFor="">Password</label>
            <input className="form-control" type="password" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Login);
