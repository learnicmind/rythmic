import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";


const SignUp = () => {
    const { register,reset, formState: { errors }, handleSubmit } = useForm();

    const { createUser, updateUserprofile } = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = (data) => {
        
        createUser(data.email, data.password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                updateUserprofile(data.name, data.photo)
                    .then(() => {
                        const saveduser = { name: data.name, email: data.email }
                        fetch('https://rythmic-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveduser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: 'User Created Successfully.',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                    
                                    navigate('/login')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <div className="hero min-h-screen bg-slate-950 md:pt-24 pb-6">
            <Helmet>
                <title>RyThmic | Sign Up</title>
            </Helmet>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name field is required</span>}
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
                                <input name='email' {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[0-9].*[0-9])(?=.*[a-z])/
                                })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">Password Should to be Minimum 6 Characters, one uppercase, one lowercase and one special Character</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="SignUp" className="btn bg-[#E8E8E8]  border-0 border-[#48a5af] border-l-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]" />
                            </div>
                        </form>
                        <p className='my-4 font-bold text-center'>Already have an account?<Link className='text-[#59dae9] font-bold' to='/login'> Login</Link></p>

                    </div>
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;