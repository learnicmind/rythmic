import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Error404 = () => {
    return (
        <div>
            <Helmet>
                <title>404 | Error</title>
            </Helmet>
            <div className="bg-slate-950 h-screen">
                <div className="flex items-center justify-center">
                    <img className="w-[550px]" src="https://cdnl.iconscout.com/lottie/premium/thumb/page-not-found-3959255-3299954.gif" alt="" />
                </div>
                <div className="flex items-center justify-center mt-4">
                    <Link to='/'>
                        <button className="btn bg-[#E8E8E8] border-0 border-[#48a5af] border-l-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error404;