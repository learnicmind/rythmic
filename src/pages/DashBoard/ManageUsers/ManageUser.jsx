import { useQuery } from '@tanstack/react-query';
import { FaChalkboardTeacher, FaTrashAlt, FaUserShield, } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const response = await fetch('https://rythmic-server.vercel.app/users')
        return response.json()
    })

    const handleAdmin = user =>{
        fetch(`https://rythmic-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                  refetch()
            }
        })
    }
    const handleInstructor = user =>{
        fetch(`https://rythmic-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                  refetch()
            }
        })
    }


    

    const handleDelete = user => {
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
                fetch(`https://rythmic-server.vercel.app/users/${user._id}`, {
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
            <h1 className='text-3xl font-semibold text-[#59dae9] pb-5'>Manage {users.length} Users</h1>

            <div className="overflow-x-auto rounded-t-xl border-0">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg text-white bg-slate-950'>
                            <th></th>
                            <th className='text-[#59dae9]'>Name</th>
                            <th  className='text-[#59dae9]'>Email</th>
                            <th  className='text-[#59dae9]'>Role</th>
                            <th  className='text-[#59dae9]'>Action</th>
                            <th  className='text-[#59dae9]'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <th className='space-y-3 flex flex-col text-sm'>
                                        {
                                            user.role === 'admin' ? <button className="px-3 py-1 rounded bg-slate-500 text-lg flex justify-center text-white" disabled style={{ transition: '.5s' }}><FaUserShield/></button> : <button onClick={() => handleAdmin(user)} className="btn btn-sm bg-[#E8E8E8] border-0 border-[#48a5af] border-l-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]" style={{ transition: '.5s' }}>Admin</button>
                                        }
                                        {  user.role === 'instructor' ? <button className="px-3 py-1 rounded bg-slate-500 text-lg flex justify-center text-white" disabled style={{ transition: '.5s' }}><FaChalkboardTeacher/></button> :
                                            <button onClick={() => handleInstructor(user)} to='/dashboard/payment' className="btn btn-sm bg-[#E8E8E8] border-0 border-[#48a5af] border-l-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]" style={{ transition: '.5s' }}>Instructor</button>
                                        }

                                        
                                    </th>
                                    <th className='text-end'>
                                        <button onClick={() => handleDelete(user)} className="px-3 py-2 rounded bg-red-700 hover:opacity-70 text-white" style={{ transition: '.5s' }}><FaTrashAlt /></button>
                                    </th>
                                </tr>
                            </>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;