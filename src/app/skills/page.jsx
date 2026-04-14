// export default function Skills() {
//   return (
//     <section className="min-h-screen bg-white px-6 py-16">
      
//       <div className="max-w-6xl mx-auto text-center">
        
//         {/* Title */}
//         <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
//           My Skills
//         </h2>

//         <p className="text-gray-500 mb-12">
//           Here are the technologies and tools I work with
//         </p>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          
//           {/* Skill Card */}
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Next.js",
//             "Tailwind CSS",
//             "PHP",
//             "Laravel",
//           ].map((skill, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
//             >
//               <h3 className="text-lg font-semibold text-gray-700">
//                 {skill}
//               </h3>
//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }




const projects = [
  {
    title: "Ayatht Project",
    image: "/projects/ayatht.webp",
  },
  {
    title: "Class Routine App",
    image: "/projects/class-routine.png",
  },
  {
    title: "Education Dashboard",
    image: "/projects/Dashbord-education.jpg",
  },
  {
    title: "Kids Learning App",
    image: "/projects/kids.webp",
  },
  {
    title: "SSO Authentication",
    image: "/projects/sso.webp",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          My Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {project.title}
                </h3>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

