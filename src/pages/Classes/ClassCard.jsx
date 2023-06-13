import { useContext } from "react";
import Swal from "sweetalert2";
import useSelectedClass from "../../hooks/useSelectedClass";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const ClassCard = ({ cls }) => {
    console.log(cls);
    const { banner, className, instructor, price, seats, _id } = cls;
    const { user } = useContext(AuthContext);
    const [, refetch] = useSelectedClass()
    const navigate = useNavigate()

    const handleAddClass = () => {

        const bookClass = { classId: _id, className, price, seats, banner, instructor, email: user.email }
        if (user && user.email) {
            fetch('http://localhost:5000/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookClass)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Selected Successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login To Select Classes!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }
    return (
        <div className="">
            <div className="text-center bg-gray-500 rounded-lg">
                <img className="w-full h-64 " src={banner} alt="" />
                <div className="text-black">
                    <h2 className="text-xl font-bold text-[#59dae9] py-1">{className}</h2>
                    <h2 className="text-lg font-semibold">Instructor Name: {name}</h2>
                    <h2 className="text-lg font-semibold">Available Seats: {seats}</h2>
                    <h2 className="text-lg font-semibold">Price: {price}</h2>
                </div>
                <div className="py-4">
                    {seats === 0 ? <button className="btn bg-[#E8E8E8] border-0 border-[#48a5af] border-l-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]" disabled>Select</button> :

                        <button onClick={() => handleAddClass(cls)} className="btn bg-[#E8E8E8] border-0 border-[#48a5af] border-l-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]"
                        >Select</button>}
                </div>
            </div>
        </div>
    );
};

export default ClassCard;