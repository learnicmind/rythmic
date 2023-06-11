import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-t from-cyan-100 to-gray-300">
            <div className="hero-content flex-col lg:flex-row md:gap-40">
                <div className="relative text-center lg:text-left w-1/2 ">
                    <div className="p-10">
                        <img
                        className="mx-auto h-[500px] w-[500px] rounded-xl"
                        src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1684610646~exp=1684611246~hmac=c9d43d2f33f1f867f8d5029533ccc772353d234cf2819878adad1100ab96d24a"
                        alt="Your Image"
                    />
                    </div>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body bg-transparent">
                        <h1 className="text-3xl text-center font-bold">Register</h1>
                        <form  className=''>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name='photo' type="text" placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-emerald-500 hover:bg-emerald-600" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 font-bold text-center'>Already have an account?<Link className='text-slate-700 underline hover:text-slate-900' to='/login'> Login</Link></p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;