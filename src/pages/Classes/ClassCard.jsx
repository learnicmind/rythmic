

const ClassCard = ({ cls }) => {
    console.log(cls);
    return (
        <div className="">
            <div className="text-center bg-gray-500 rounded-lg">
                <img className="w-full h-64 " src={cls.banner} alt="" />
                <div className="text-black">
                    <h2 className="text-xl font-bold text-[#59dae9] py-1">{cls.class}</h2>
                    <h2 className="text-lg font-semibold">Instructor Name: {cls.name}</h2>
                    <h2 className="text-lg font-semibold">Available Seats: {cls.seats}</h2>
                    <h2 className="text-lg font-semibold">Price: {cls.price}</h2>
                </div>
                <div className="py-4">
                    <button className="btn bg-[#E8E8E8] border-0 border-[#48a5af] border-l-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;