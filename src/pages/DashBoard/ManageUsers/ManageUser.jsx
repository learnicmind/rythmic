import { useQuery } from '@tanstack/react-query';
import { FaChalkboardTeacher, FaTrashAlt, FaUserShield, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const response = await fetch('http://localhost:5000/users')
        return response.json()
    })

    const handleAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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

    const handleStudent = user =>{
        fetch(`http://localhost:5000/users/student/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Student!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                  refetch()
            }
        })
    }

    const handleDelete = () => {

    }

    return (
        <div>
            <h1 className='text-3xl font-semibold text-green-700 pb-5'>Manage {users.length} Users</h1>

            <div className="overflow-x-auto rounded-t-xl">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg text-white bg-[#44b066]'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Delete</th>
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
                                            user.role === 'admin' ? <button className="px-3 py-1 rounded bg-slate-500 text-lg flex justify-center text-white" disabled style={{ transition: '.5s' }}><FaUserShield/></button> : <button onClick={() => handleAdmin(user)} className="px-3 py-1 rounded bg-green-700 hover:opacity-70 text-white" style={{ transition: '.5s' }}>Admin</button>
                                        }
                                        {  user.role === 'instructor' ? <button className="px-3 py-1 rounded bg-slate-500 text-lg flex justify-center text-white" disabled style={{ transition: '.5s' }}><FaChalkboardTeacher/></button> :
                                            <button onClick={() => handleInstructor(user)} to='/dashboard/payment' className="px-3 py-1 rounded bg-green-700 hover:opacity-70 text-white" style={{ transition: '.5s' }}>Instructor</button>
                                        }

                                        { user.role === 'student' ? <button className="px-3 py-1 rounded bg-slate-500 text-lg flex justify-center text-white" disabled style={{ transition: '.5s' }}><FaUsers/></button> : 
                                            <button onClick={() => handleStudent(user)} className="px-3 py-1 rounded bg-green-700 hover:opacity-70 text-white" style={{ transition: '.5s' }}>Student</button>
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