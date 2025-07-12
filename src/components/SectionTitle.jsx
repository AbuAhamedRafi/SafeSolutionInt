import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
    return (
        <div className="w-full bg-white bg-fixed bg-no-repeat bg-cover">
            <div className="text-black flex justify-center items-center text-2xl font-bold h-full px-4 sm:px-6">
                <h1 className="text-2xl xs:text-3xl md:text-4xl py-12 md:py-16 font-semibold text-center leading-tight">{title}</h1>
            </div>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SectionTitle;