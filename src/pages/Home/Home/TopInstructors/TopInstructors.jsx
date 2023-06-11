import { Link } from "react-router-dom";
import useInstructors from "../../../../hooks/useInstructors";


const TopInstructors = () => {

    const [instructors] = useInstructors()

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-4xl text-center font-bold text-[#59dae9]">Top Instructors</h2>
            <p className="text-center px-20 py-4 font-semibold text-emerald-50">Meet our exceptional team of instructors at RyThmic who are dedicated to helping you unleash your full potential and guiding you on your rhythmic journey. Each instructor brings a unique blend of talent, expertise, and passion for their craft, creating a supportive and inspiring environment for all our students. Get to know some of our top instructors who will lead you through exhilarating classes and empower you to reach new heights in your dance and movement practice.</p>
            <div className="grid md:grid-cols-3 gap-6 my-10">
                {
                    instructors.slice(0, 6).map(item => <div key={item._id} className='bg-slate-500 flex flex-col items-start rounded-lg pb-5 hover:scale-105' style={{ transition: '0.5s' }}>
                            <img className="h-48 w-full rounded-sm" src={item.image} alt="" />
                            <div className="p-3 bg-emerald-50 w-full">
                                <h1 className="text-2xl">{item.class}</h1>
                                <h3 className="text-xl font-bold">Instructor: {item.name}</h3>
                                <h3 className="font-semibold">Total Student: {item.students}</h3>

                                <Link to='/instructors'>
                                    <button className="btn mt-4 bg-[#E8E8E8] border-0 border-[#48a5af] border-l-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]">Instructors Detail</button>
                                </Link>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TopInstructors;