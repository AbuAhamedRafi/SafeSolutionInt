const SectionTitle = ({ title }) => {
    return (
        <div className="w-full bg-[url('https://t4.ftcdn.net/jpg/08/13/43/03/360_F_813430325_TXrckwQPj9GpiuCaYn2YM4P7v0h3OccK.jpg')] bg-fixed bg-no-repeat bg-cover">
            <div className="bg-black/40 text-white flex justify-center items-center text-2xl font-bold h-full">
                <h1 className="md:text-4xl text-3xl py-16 font-semibold">{title}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;