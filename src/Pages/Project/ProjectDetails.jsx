import SectionTitle from "../../components/SectionTitle";

const ProjectDetails = () => {
  return (
    <div className="">
      <SectionTitle title="Project Details" />
      <div className="max-w-7xl mx-auto p-4">
        <img
          src="https://castro.jamstacktemplates.dev/assets/img/projects/project-details.jpg"
          alt="Project Overview"
          className="w-full h-auto object-cover rounded-lg"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
          {/* Left Panel - Project Info */}
          <div className="bg-gray-100 text-black p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Project Information</h3>
            <div className="space-y-4 text-base">
              {[
                ["Client", "RRS Company"],
                ["Location", "San Francisco"],
                ["Area(sf)", "550,000 sf"],
                ["Year", "2019"],
                ["Budget", "$245,000,000"],
                ["Architect", "Scott & Austin"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between border-b border-gray-300 pb-2"
                >
                  <span className="font-semibold">{label}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Description */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Mountain Tunnel
            </h1>
            <div className="space-y-6 text-gray-700 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                quia autem, odit, suscipit asperiores quam adipisci id culpa
                quaerat voluptas, esse facilis quasi unde corporis sapiente
                molestiae quas? Maxime blanditiis praesentium ab maiores, ex
                quasi minus totam aut, inventore similique nulla sed corporis
                ullam eaque iure?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                adipisci nihil necessitatibus nemo in quos laboriosam neque
                expedita ducimus animi provident facilis, voluptatibus, odit hic
                praesentium veritatis a et est quae culpa eos, aperiam
                architecto? Earum sed ut error totam, cupiditate distinctio
                itaque doloribus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
