import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const {createNewUser, setUser} = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        // new way to get form data with js built in fromdata
        const form = new FormData(e.target)
        const name = form.get('name')
        const email =form.get('email')
        const photo = form.get('photo')
        const password  = form.get('password')
        console.log(name, email, photo, password)
        createNewUser(email,password)
        .then(result => {
          const user = result.user
          setUser(user)
          console.log("Successfuly register",user)
        })
        .catch(error => console.log("error found",error.message))
        
    }
  
    return (
        <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="font-semibold text-center text-3xl mt-5 ">Register your account</h2>
        <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url here"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              type="password"
              name="password"
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
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="font-semibold text-center">Have an account alerady? <Link className="text-purple-500" to='/auth/login'>Login Here</Link> </p>
      </div>
    </div>
    );
};

export default Register;