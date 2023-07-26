import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";
import ClassCard from "./ClassCard";


const Classes = () => {
    const [classes] = useClasses();
    console.log(classes);

    return (
        <div className="py-10  bg-slate-900">
            <Helmet>
                <title>RyThmic | Classes</title>
            </Helmet>
            <h2 className="text-4xl text-center font-bold text-[#59dae9]">All Classes</h2>
            <p className="text-justify md:px-14 px-4 py-4 font-semibold text-emerald-50 mb-6">Welcome to RyThmic, where rhythm meets movement! Our top classes are carefully curated to bring out the best in you, combining the power of music and dance to create an extraordinary experience. Whether you are a seasoned performer or just starting your rhythmic journey, we have the perfect class to help you unlock your full potential. Join us and let the music guide your body as you discover the joy and artistry of dance.</p>
            <div className="grid md:grid-cols-3 gap-8 w-11/12 mx-auto  ">

                {
                    classes.map(cls => <ClassCard
                        key={cls._id}
                        cls={cls}
                    >

                    </ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;