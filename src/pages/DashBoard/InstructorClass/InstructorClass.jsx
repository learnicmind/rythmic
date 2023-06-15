
import {  FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useInstructorClass from '../../../hooks/useInstructorClass';
import { Helmet } from 'react-helmet-async';

const InstructorClass = () => {
    const [refetch, InstructorClass] = useInstructorClass()

    const handleDelete = (cls) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addclass/${cls._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        refetch();
                    }
                })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>My Classes | RyThmic Instructor</title>
            </Helmet>
            <div className='mb-5 flex justify-between items-center'>
                <h1 className='text-3xl font-semibold'>My Classes</h1>

                <Link to='/dashboard/addclass' className="px-3 py-1 rounded bg-slate-900 hover:opacity-70 text-lg text-white" style={{ transition: '.5s' }}>Add Class</Link>
            </div>

            <div className="overflow-x-auto rounded-t-xl">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg text-white bg-slate-900'>
                            <th></th>
                            <th>Class</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            InstructorClass.map((cls, index) => <tr key={cls._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask rounded w-12 h-12">
                                                <img src={cls.banner} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cls.className}</td>
                                <td className=''>$ {cls.price}</td>
                                <td className='text-center'>{cls.seats}</td>
                                <th>
                                    <Link to='/dashboard/update' className="px-3 py-1 rounded bg-slate-900 hover:opacity-70 text-lg text-white" style={{ transition: '.5s' }}>Update</Link>
                                </th>
                                <th className='text-center'>
                                    <button onClick={() => handleDelete(cls)} className="px-3 py-2 rounded bg-red-700 hover:opacity-70 text-lg text-white" style={{ transition: '.5s' }}><FaTrashAlt /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default InstructorClass;