import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AddClass = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        fetch('https://rythmic-server.vercel.app/addclass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        title: 'Class Added Successfully.',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })

                    navigate('/dashboard/instructorclass')
                }
            })

    };
    return (
        <div>


            <div className='w-full md:mx-auto mx-5  bg-slate-700 p-12'>

                <div>
                    <h1 className='text-3xl font-bold text-center mb-5 pb-3 border-b-2 rounded-lg border-slate-800'>Add Class</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid md:grid-cols-2 items-center gap-4 w-full'>
                            <div>
                                <div className='grid gap-2 text-lg'>
                                    <label>Name</label>
                                    <input {...register("instructor")} className='w-full py-2 rounded px-3' type="text" name="instructor" id="" placeholder='Type Your Name' defaultValue={user.displayName} readOnly />
                                </div>

                                <div className='grid gap-2 text-lg'>
                                    <label>Email</label>
                                    <input {...register("email", { required: true })} className='w-full py-2 rounded px-3' type="email" name="email" id="" placeholder='Type Your Email' defaultValue={user.email} readOnly />
                                    {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                                </div>

                                <div className='grid gap-2 text-lg'>
                                    <label>Class Banner</label>
                                    <input {...register("banner")} className='w-full py-2 rounded px-3' type="text" name="banner" id="" placeholder='Banner URL' />
                                </div>
                            </div>

                            <div>
                                <div className='grid gap-2 text-lg'>
                                    <label>Class Title</label>
                                    <input {...register("className", { required: true })} className='w-full py-2 rounded px-3' type="text" name="className" id="" placeholder='Class Title' />
                                    {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                                </div>

                                <div className='grid gap-2 text-lg'>
                                    <label>Price</label>
                                    <input {...register("price")} className='w-full py-2 rounded px-3' type="text" name="price" id="" placeholder='Set $price' />
                                </div>

                                <div className='grid gap-2 text-lg'>
                                    <label>Seats</label>
                                    <input {...register("seats")} className='w-full py-2 rounded px-3' type="text" name="seats" id="" placeholder='Available Seats' />
                                </div>
                            </div>
                        </div>




                        <div className='mt-2'>
                            
                            <input type="submit" value="Add class" className="btn w-full bg-[#E8E8E8]  border-0 border-[#48a5af] border-l-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddClass;