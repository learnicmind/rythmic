import useClasses from "../../../../hooks/useClasses";


const TopClasses = () => {

    const [classes] = useClasses()

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-4xl text-center">Top Classes</h2>
            <div className="grid md:grid-cols-3 gap-6 my-10">
                {
                    classes.slice(0, 6).map(item => <>
                        <div className={item.seats === 0 ? 'bg-red-600 h-full rounded-lg text-white flex flex-col items-start border-2  hover:scale-105' : 'bg-bage-100 flex flex-col items-start rounded-lg border-2 pb-5 hover:scale-105'} style={{ transition: '0.5s' }}>
                            <img className="h-48 w-full" src={item.banner} alt="" />
                            <div className="p-3">
                                <h1 className="text-2xl">{item.class}</h1>
                                <h3 className="text-xl">Instructor: {item.name}</h3>
                                <h3>Total Student: {item.students}</h3>
                                <h3>Availble Seats: {item.seats}</h3>

                                
                                    {item.seats === 0 ? <button className="btn mt-4 bg-[#E8E8E8] border-0 border-[#48a5af] border-b-4 hover:bg-[#111827] hover:border-[#59dae9] text-white " disabled>Select Class</button>
                                        :
                                        <button className="btn mt-4 bg-[#E8E8E8] border-0 border-[#48a5af] border-b-4 hover:bg-[#111827] hover:border-[#59dae9] text-black hover:text-[#59dae9]">Select Class</button>
                                    }

                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default TopClasses;