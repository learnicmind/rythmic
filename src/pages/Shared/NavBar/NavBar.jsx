import { Link } from "react-router-dom";


const NavBar = () => {

    const navLinks = <>
        <li><Link className="text-lg font-semibold" to='/'>Home</Link></li>
        <li><Link className="text-lg font-semibold" to='/'>Instructors</Link></li>
        <li><Link className="text-lg font-semibold" to='/'>Classes</Link></li>
        <li><Link className="text-lg font-semibold" to='/'>Dashboard</Link></li>
    </>


    return (
        <div className=" bg-cover bg-black  bg-center">
            <div className="mx-auto md:w-[1300px] text-gray-700">
                <div className="navbar py-4">
                    <div className="navbar-start text-white">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>

                        <Link to='/'>
                            <button className="btn btn-ghost normal-case ">
                                <span className='md:text-3xl text-gray-200 tracking-wide '>Rythmic</span>
                            </button>
                        </Link>

                    </div>
                    <div className="navbar-center text-white  hidden lg:flex">
                        <ul className="menu menu-horizontal flex gap-2">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end flex items-center gap-2"> <img  className="w-10 rounded-full" src="https://as1.ftcdn.net/v2/jpg/01/49/81/52/1000_F_149815203_Og27WLpK7bCVTz9uDRic1bSxtPnFGguV.jpg" />
                    <button className="btn bg-[#E8E8E8] border-0 border-[#59dae9] border-b-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;