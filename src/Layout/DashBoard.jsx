import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaBookmark, FaChalkboard, FaChalkboardTeacher, FaCheckCircle, FaHome, FaMoneyCheck, FaUsers } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin'
import useInstructor from '../hooks/useInstructor';
import useStudent from '../hooks/useStudents';

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [isStudent] = useStudent()

    // console.log('admin', isAdmin);
    // console.log('instructor', isInstructor);
    // console.log('student', isStudent);

    return (
        <div className="drawer-mobile drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-5 md:m-16">
                {/* Page content here */}
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary hover:bg-[#44b066] bg-[#44b066] text-black text-2xl drawer-button lg:hidden"><FaBars /></label>
            </div>
            <div className="drawer-side">

                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 text-lg font-semibold w-80 h-[100vh] bg-[#44b066] ">
                    {/* Sidebar content here */}
                    {
                        isAdmin && <>
                            <li><NavLink to='/dashboard/adminhome'><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/manageclass'><FaChalkboardTeacher /> Manage Classes</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers /> Manage Users</NavLink></li>
                        </>
                    }

                    {isInstructor &&
                        <>
                            <li><NavLink to='/dashboard/instructorhome'><FaHome /> Instructor Home</NavLink></li>
                            <li><NavLink to='/dashboard/addclass'><FaChalkboardTeacher />My Classes</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/enrolledstudents'><FaCheckCircle /> Enrolled students</NavLink></li>
                            <li><NavLink to='/dashboard/feedback'>Feedback</NavLink></li>
                        </>
                    }

                    {isStudent &&
                        <>
                            <li><NavLink to='/dashboard/userhome'><FaHome /> Student Home</NavLink></li>
                            <li><NavLink to='/dashboard/myclasses'><FaBookmark />My Selected Classes</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/reservation'><FaCheckCircle /> My Enrolled Classes</NavLink></li>
                            <li><NavLink to='/dashboard/payment'><FaMoneyCheck /> Payment History</NavLink></li>
                        </>
                    }

                    <li className="divider"></li>

                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/instructors'><FaChalkboardTeacher /> Instructors</NavLink></li>
                    <li><NavLink to='/classes'><FaChalkboard /> Classes</NavLink></li>
                </ul>

            </div >
        </div >
    );
};

export default Dashboard;