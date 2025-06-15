import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
    return (
        <div className="w-full bg-white bg-fixed bg-no-repeat bg-cover">
            <div className="text-black flex justify-center items-center text-2xl font-bold h-full">
                <h1 className="md:text-4xl text-3xl py-16 font-semibold">{title}</h1>
            </div>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SectionTitle;