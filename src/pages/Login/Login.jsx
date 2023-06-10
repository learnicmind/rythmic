import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero min-h-screen bg-slate-950 md:pt-24 pb-6">

            <div className="hero-content flex gap-10 ">
                <div className="text-center md:w-1/2 lg:text-left">

                    <img className="rounded-lg" src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1684610646~exp=1684611246~hmac=c9d43d2f33f1f867f8d5029533ccc772353d234cf2819878adad1100ab96d24a' alt="" />
                </div>
                <div className="card md:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-[#59dae9] text-center pt-4">Login</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn bg-[#E8E8E8]  border-0 border-[#48a5af] border-l-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]" />
                        </div>
                    </form>
                    <div className='flex justify-center pb-2'>
                        <p><small>New in RyThmic?<Link to="/signup" className='text-[#59dae9] font-bold'> SignUp</Link></small></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;