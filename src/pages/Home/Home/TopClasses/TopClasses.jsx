import useClasses from "../../../../hooks/useClasses";


const TopClasses = () => {

    const [classes] = useClasses()

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-4xl text-center font-bold text-[#59dae9]">Top Classes</h2>
            <p className="text-center px-20 py-4 font-semibold text-emerald-50">Welcome to RyThmic, where rhythm meets movement! Our top classes are carefully curated to bring out the best in you, combining the power of music and dance to create an extraordinary experience. Whether you are a seasoned performer or just starting your rhythmic journey, we have the perfect class to help you unlock your full potential. Join us and let the music guide your body as you discover the joy and artistry of dance.</p>
            <div className="grid md:grid-cols-3 gap-6 my-10">
                {
                    classes.slice(0, 6).map(item => <>
                        <div className={item.seats === 0 ? 'bg-red-600 h-full rounded-lg text-white flex flex-col items-start border-2  hover:scale-105' : 'bg-bage-100 flex flex-col items-start rounded-lg border-2 pb-5 hover:scale-105'} style={{ transition: '0.5s' }}>
                            <img className="h-48 w-full" src={item.banner} alt="" />
                            <div className="p-3 bg-emerald-50 w-full">
                                <h1 className="text-xl font-bold">{item.class}</h1>
                                <h3 className="text-lg font-bold py-1">Instructor: {item.name}</h3>
                                <h3 className="font-semibold py-1">Total Student: {item.students}</h3>
                                <h3 className="font-semibold py-1">Availble Seats: {item.seats}</h3>

                                
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