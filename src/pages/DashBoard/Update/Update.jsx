
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';

const Update = () => {
    const {user} = useAuth()
    const update = useLoaderData()
    // console.log(update);

    const {_id } = update;
    console.log(_id);
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.instructor.value;
        const email = form.email.value;
        const banner = form.banner.value;
        const className = form.className.value;
        const price = form.price.value;
        const seats = form.seats.value;
        const updatedData = {
            name,
            email,
            banner,
            className,
            price,
            seats
        }
        console.log(updatedData);

        fetch(`https://rythmic-server.vercel.app/classes/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Updated!',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                  form.reset()
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Update | RyThmic Instructor</title>
            </Helmet>
            <h1 className='text-3xl font-semibold mb-5'>Update a Class</h1>

            <div className='w-full md:mx-auto mx-5  bg-gray-300 p-12'>
                    <h1 className='text-3xl font-bold text-center mb-5 pb-3 border-b-2 rounded-lg border-slate-800'>Update Class</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='grid md:grid-cols-2 items-center gap-4 w-full'>
                            <div>
                                <div className='grid gap-2 text-lg'>
                                    <label>Name</label>
                                    <input className='w-full py-2 rounded px-3' type="text" name="name" id="" placeholder='Type Your Name' defaultValue={user.displayName} readOnly />
                                </div>

                                <div className='grid gap-2 text-lg'>
                                    <label>Email</label>
                                    <input className='w-full py-2 rounded px-3' type="email" name="email" id="" placeholder='Type Your Email' defaultValue={user.email} readOnly />
                                </div>

                                <div className='grid gap-2 text-lg'>
                                    <label>Class Banner</label>
                                    <input className='w-full py-2 rounded px-3' type="text" name="banner" id="" placeholder='Banner URL' />
                                </div>
                            </div>

                            <div>
                                <div className='grid gap-2 text-lg'>
                                    <label>Class Title</label>
                                    <input className='w-full py-2 rounded px-3' type="text" name="className" id="" placeholder='Class Title' />
                                </div>

                                <div className='grid gap-2 text-lg'>
                                    <label>Price</label>
                                    <input className='w-full py-2 rounded px-3' type="text" name="price" id="" placeholder='Set $price' />
                                </div>

                                <div className='grid gap-2 text-lg'>
                                    <label>Seats</label>
                                    <input className='w-full py-2 rounded px-3' type="text" name="seats" id="" placeholder='Available Seats' />
                                </div>
                            </div>
                        </div>




                        <div>
                            <input type="submit" value="Update Class" className='w-full py-2 bg-slate-800 hover:opacity-80 rounded font-bold text-white mt-5' style={{ transition: '0.5s' }} />
                        </div>
                    </form>
                </div>

        </div>
    );
};

export default Update;