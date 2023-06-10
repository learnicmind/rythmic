import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import TopClasses from "../TopClasses/TopClasses";
import TopInstructors from "../TopInstructors/TopInstructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopClasses></TopClasses>
            <TopInstructors></TopInstructors>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;