import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useSelectedClass from '../../../hooks/useSelectedClass';

const MyClasses = () => {
    const [refetch, selectedClass] = useSelectedClass([])
    // console.log(selectedClass);

    const handleDelete = cls => {

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
                fetch(`https://rythmic-server.vercel.app/selectedClass/${cls._id}`, {
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
            <h1 className='text-3xl font-semibold text-[#59dae9] pb-5'>My Selected Classes: {selectedClass.length}</h1>

            <div className="overflow-x-auto rounded-t-xl">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg text-[#59dae9] bg-slate-950'>
                            <th></th>
                            <th>Class</th>
                            <th>Title</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selectedClass.map((S_Class, index) => <tr key={S_Class._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask rounded w-12 h-12">
                                                    <img src={S_Class.banner} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{S_Class.className}</td>
                                    <td>{S_Class.instructor}</td>
                                    <td className='text-end'>$ {S_Class.price}</td>
                                    <td className='text-end'>{S_Class.seats}</td>
                                    <th>
                                         <Link to={`/dashboard/payment/${S_Class._id}`}><button className="btn btn-sm bg-[#E8E8E8] border-0 border-[#48a5af] border-l-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]"
                        >Pay</button></Link>
                                    </th>
                                    <th className='text-end'>
                                        <button onClick={() => handleDelete(S_Class)} className="px-3 py-2 rounded bg-red-700 hover:opacity-70 text-lg text-white" style={{ transition: '.5s' }}><FaTrashAlt /></button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;