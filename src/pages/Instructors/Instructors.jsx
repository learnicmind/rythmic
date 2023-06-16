import { Helmet } from "react-helmet-async";
import useInstructors from "../../hooks/useInstructors";


const Instructors = () => {

    const [instructors] = useInstructors();


    return (
        <div className="bg-slate-900">
            <Helmet>
                <title>RyThmic | Instructor</title>
            </Helmet>
            <div className="py-10 w-11/12 mx-auto">
                <h2 className="text-4xl text-center font-bold text-[#59dae9]">All Instructors</h2>
                <p className="text-center px-20 py-4 font-semibold text-emerald-50 mb-6">Meet our exceptional team of instructors at RyThmic who are dedicated to helping you unleash your full potential and guiding you on your rhythmic journey. Each instructor brings a unique blend of talent, expertise, and passion for their craft, creating a supportive and inspiring environment for all our students. Get to know some of our top instructors who will lead you through exhilarating classes and empower you to reach new heights in your dance  practice.</p>
                <div className="grid md:grid-cols-3 gap-8">
                    {
                        instructors.map(ins => <div key={ins._id}>
                            <div className="text-white text-center bg-slate-500 pb-4 rounded-lg">
                                <img className="w-full h-64 rounded-lg" src={ins.image} alt="" />
                                <h2 className="text-lg font-bold pt-2">Instructors Name: <span className="text-[#59dae9] text-xl">{ins.name}</span></h2>
                                <h2 className="text-lg font-semibold">Instructors Email: {ins.email}</h2>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;