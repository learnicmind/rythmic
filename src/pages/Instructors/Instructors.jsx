import useInstructors from "../../hooks/useInstructors";


const Instructors = () => {

    const [instructors] = useInstructors();


    return (
        <div className="my-20">
            <h2>this is instructors page</h2>
            <div>
                {
                    instructors.map(ins => <div key={ins._id}>
                        <img src={ins.image} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructors;