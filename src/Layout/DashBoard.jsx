import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaBookmark, FaChalkboard, FaChalkboardTeacher, FaCheckCircle,  FaHome, FaMoneyCheck, FaPenSquare, FaUsers } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin'
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    // console.log('admin', isAdmin);
    // console.log('instructor', isInstructor);
    // console.log('student', isStudent);

    return (
        <div className="drawer-mobile drawer lg:drawer-open bg-slate-900 text-[#59dae9]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-5 md:m-16">
                {/* Page content here */}
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary hover:bg-[#44b066] bg-[#44b066] text-black text-2xl drawer-button lg:hidden"><FaBars /></label>
            </div>
            <div className="drawer-side">

                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 text-lg font-semibold w-80 h-[100vh] bg-slate-950 ">

                    
                        {
                            isAdmin.admin ?
                                <>
                                    <li><NavLink to='/dashboard/adminhome'><FaHome /> Admin Home</NavLink></li>
                                    <li><NavLink to='/dashboard/manageclass'><FaChalkboardTeacher /> Manage Classes</NavLink></li>
                                    <li><NavLink to='/dashboard/allusers'><FaUsers /> Manage Users</NavLink></li>
                                </>
                                : isInstructor.instructor ?
                                    <>
                                        <li><NavLink to='/dashboard/instructorhome'><FaHome /> Instructor Home</NavLink></li>
                                        <li><NavLink to='/dashboard/addclass'><FaChalkboardTeacher />My Classes</NavLink>
                                        </li>
                                        <li><NavLink to='/dashboard/enrolledstudents'><FaCheckCircle /> Enrolled students</NavLink></li>
                                        <li><NavLink to='/dashboard/feedback'><FaPenSquare /> Feedback</NavLink></li>
                                    </>
                                    :
                                    <>
                                        <li><NavLink to='/dashboard/userhome'><FaHome /> Student Home</NavLink></li>
                                        <li><NavLink to='/dashboard/myclasses'><FaBookmark />My Selected Classes</NavLink>
                                        </li>
                                        <li><NavLink to='/dashboard/enrolledclasses'><FaCheckCircle /> My Enrolled Classes</NavLink></li>
                                        <li><NavLink to='/dashboard/payment'><FaMoneyCheck /> Payment</NavLink></li>
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