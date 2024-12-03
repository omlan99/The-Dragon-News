import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {singInUser, setUser} = useContext(AuthContext)
  const handleLogin = (e) =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    singInUser(email, password)
    .then(result => {
      const user = result.user;
      setUser(user)
      console.log(user)
    })    
    .catch(error => console.log(error.message))
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="font-semibold text-center text-3xl mt-5 ">Login to your account</h2>
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control" >
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="font-semibold text-center">Do not have an account? <Link className="text-purple-500" to='/auth/register'>Register Here</Link> </p>
      </div>
    </div>
  );
};

export default Login;
