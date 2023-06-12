import { Helmet } from "react-helmet-async";
import Gallery from "../Gallery/Gallery";
import TopClasses from "../TopClasses/TopClasses";
import TopInstructors from "../TopInstructors/TopInstructors";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>RyThmic | Home</title>
            </Helmet>
            <Banner></Banner>
            <TopClasses></TopClasses>
            <TopInstructors></TopInstructors>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;