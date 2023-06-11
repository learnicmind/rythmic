import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-slate-950 md:pt-24 pb-6">
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
                        <h1 className="text-3xl text-center font-bold text-[#59dae9]">Register</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className=''>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' {...register("name")} type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name='photo' {...register("photo")} type="text" placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email'  {...register("email", {required: true})} type="text" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' {...register("password", { required: true, 
                                minLength: 8,
                                pattern: /(?=.*[A-Z])(?=.*[0-9].*[0-9])(?=.*[a-z])/
                                })} type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="SignUp" className="btn bg-[#E8E8E8]  border-0 border-[#48a5af] border-l-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]" />
                            </div>
                        </form>
                        <p className='my-4 font-bold text-center'>Already have an account?<Link className='text-[#59dae9] font-bold' to='/login'> Login</Link></p>

                    </div>
                    <div className="divider">OR</div>
                    <div className="flex items-center justify-center pb-6 pt-2">
                        <FaGoogle className="cursor-pointer text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;