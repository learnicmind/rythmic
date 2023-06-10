import Banner from "../Banner/Banner";
import Instructors from "../Instructors/Instructors";
import TopClasses from "../TopClasses/TopClasses";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopClasses></TopClasses>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;