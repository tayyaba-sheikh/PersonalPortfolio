import React, { useMemo } from 'react';
import SectionHeader from '../../../components/shared/SectionHeader';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud } from "react-icons/fa";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaAws } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiGit, SiDocker, SiNextdotjs } from "react-icons/si";
import ServiceCard from '../../../components/shared/ServiceCard';
// import TechCard from '../../../components/shared/TechCard';
import Avatar from '../../../components/ui/Avatar';
import Paragraph from '../../../components/ui/Paragraph';
import Button from '../../../components/ui/Button';

const services = [
  {
    id: 1,
    icon: <FaCode className='card-icon' />,
    title: "Web Development",
    description: "Full-stack web development with modern frameworks and scalable architecture."
  },
  {
    id: 2,
    icon: <FaMobileAlt className='card-icon' />,
    title: "Mobile Development",
    description: "Cross-platform mobile applications with seamless performance and UX."
  },
  {
    id: 3,
    icon: <FaPaintBrush className='card-icon' />,
    title: "UI/UX Design",
    description: "Intuitive and modern designs that enhance usability and engagement."
  },
  {
    id: 4,
    icon: <FaCloud className='card-icon' />,
    title: "Cloud Solutions",
    description: "Reliable cloud-native solutions with deployment, hosting, and integrations."
  },

];

const techStack = [
  { id: 1, icon: <FaReact />, name: "React", category: "Frontend" },
  { id: 2, icon: <SiJavascript />, name: "JavaScript", category: "Frontend" },
  { id: 3, icon: <FaHtml5 />, name: "HTML5", category: "Frontend" },
  { id: 4, icon: <FaCss3Alt />, name: "CSS3", category: "Frontend" },
  { id: 5, icon: <SiTailwindcss />, name: "TailwindCSS", category: "Frontend" },
  { id: 6, icon: <FaNodeJs />, name: "Node.js", category: "Backend" },
  { id: 7, icon: <SiExpress />, name: "Express.js", category: "Backend" },
  { id: 8, icon: <SiMongodb />, name: "MongoDB", category: "Database" },
  { id: 9, icon: <FaDatabase />, name: "SQL", category: "Database" },
  { id: 10, icon: <SiGit />, name: "Git", category: "Tools" },
  { id: 11, icon: <SiDocker />, name: "Docker", category: "Tools" },
  { id: 12, icon: <FaAws />, name: "AWS", category: "Cloud" },
];

const Services = () => {
  const navigate = useNavigate();
  const topServices = services.slice(0, 3);


  return (
    <section id="services" className='flex flex-col items-center'>
      <SectionHeader
        title={'Services'}
        buttonText={'View More'}
        onClick={() => { navigate('/services'); }}
        headingDelay="100"
        buttonDelay="200"
      >
        <span className="text-accent">Services</span> I provide
      </SectionHeader>

      {/* Services Grid */}
      <div className="w-full grid grid-auto py-4">
        {topServices.map((service, idx) => (
          <ServiceCard
            key={service.id}
            {...service}
            aos="zoom-in-up"
            aosDelay={idx * 200}
          />
        ))}
      </div>

      {/* About Section */}
      <div className="flex items-center justify-center gap-4 p-5 md:flex-col">
        <div className="flex flex-col md:w-full md:items-center">
          <Avatar
            src={'/MyImage.jpg'}
            alt='image'
            size='xlarge'
          />
        </div>
        <div className="w-full flex flex-col items-start gap-2 justify-center md:items-center">
          <SectionHeader title={'About Me'} justify='left' className='md:justify-center md:text-center'>
            Who I <span className="text-accent">Am</span> & What I <span className="text-accent">Do?</span>
          </SectionHeader>

          <Paragraph size={'xs'} color={'muted'} className={'md:text-center mb-3'}>
            I’m a passionate developer dedicated to building scalable, user-friendly digital solutions. With expertise in modern web and mobile technologies, I help businesses and individuals turn their ideas into impactful products.
          </Paragraph>

          <p
            className="signature text-2xl text-accent text-sm text-shadow"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Tayyaba Sheikh
          </p>

          <Button aos={'fade-left'} aosDelay={'200'}>Let's Work Togather</Button>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="w-full">
        <SectionHeader
          title="Tech Stack"
          headingDelay="100"
        >
          <span className="text-accent">Technologies</span> I work with
        </SectionHeader>

        <div className="marquee py-5" data-aos="fade-up" data-aos-delay="200">
          <div className="marquee__track">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div
                key={idx}
                className="marquee__item"
                data-aos="zoom-in"
                data-aos-delay={(idx % techStack.length) * 150}
              >
                <span className="marquee__icon">{tech.icon}</span>
                <p className="marquee__name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;
// import React, { useMemo } from 'react';
// import SectionHeader from '../../../components/shared/SectionHeader';
// import { useNavigate } from 'react-router-dom';
// import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud } from "react-icons/fa";
// import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaAws } from "react-icons/fa";
// import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiGit, SiDocker, SiNextdotjs } from "react-icons/si";
// import ServiceCard from '../../../components/shared/ServiceCard';
// // import TechCard from '../../../components/shared/TechCard';
// import Avatar from '../../../components/ui/Avatar';
// import Paragraph from '../../../components/ui/Paragraph';
// import Button from '../../../components/ui/Button';
// import OrbitNode from '../../../components/shared/OrbitNode';


// const centerSize = 96;     // px — size of the center node
// const orbitSize = 600;    // px — overall diameter of the orbit area
// const innerR = 150;    // px — inner ring radius
// const outerR = 250;    // px — outer ring radius

// // Helper: polar → cartesian
// const polar = (r, deg) => {
//   const rad = (deg - 90) * (Math.PI / 180); // start at top
//   return {
//     x: Math.cos(rad) * r,
//     y: Math.sin(rad) * r,
//   };
// };


// const services = [
//   {
//     id: 1,
//     icon: <FaCode className='card-icon' />,
//     title: "Web Development",
//     description: "Full-stack web development with modern frameworks and scalable architecture."
//   },
//   {
//     id: 2,
//     icon: <FaMobileAlt className='card-icon' />,
//     title: "Mobile Development",
//     description: "Cross-platform mobile applications with seamless performance and UX."
//   },
//   {
//     id: 3,
//     icon: <FaPaintBrush className='card-icon' />,
//     title: "UI/UX Design",
//     description: "Intuitive and modern designs that enhance usability and engagement."
//   },
//   {
//     id: 4,
//     icon: <FaCloud className='card-icon' />,
//     title: "Cloud Solutions",
//     description: "Reliable cloud-native solutions with deployment, hosting, and integrations."
//   },

// ];

// const techStack = [
//   { id: 1, icon: <FaReact />, name: "React", category: "Frontend" },
//   { id: 2, icon: <SiJavascript />, name: "JavaScript", category: "Frontend" },
//   { id: 3, icon: <FaHtml5 />, name: "HTML5", category: "Frontend" },
//   { id: 4, icon: <FaCss3Alt />, name: "CSS3", category: "Frontend" },
//   { id: 5, icon: <SiTailwindcss />, name: "TailwindCSS", category: "Frontend" },
//   { id: 6, icon: <FaNodeJs />, name: "Node.js", category: "Backend" },
//   { id: 7, icon: <SiExpress />, name: "Express.js", category: "Backend" },
//   { id: 8, icon: <SiMongodb />, name: "MongoDB", category: "Database" },
//   { id: 9, icon: <FaDatabase />, name: "SQL", category: "Database" },
//   { id: 10, icon: <SiGit />, name: "Git", category: "Tools" },
//   { id: 11, icon: <SiDocker />, name: "Docker", category: "Tools" },
//   { id: 12, icon: <FaAws />, name: "AWS", category: "Cloud" },
// ];

// const Services = () => {
//   const navigate = useNavigate();
//   const topServices = services.slice(0, 3);

//   // Distribute angles evenly around the circle
//   const innerTechs = [
//     { id: 1, label: "React", icon: <FaReact /> },
//     { id: 2, label: "Next.js", icon: <SiNextdotjs /> },
//     { id: 3, label: "JavaScript", icon: <SiJavascript /> },
//     { id: 4, label: "HTML5", icon: <FaHtml5 /> },
//     { id: 5, label: "CSS3", icon: <FaCss3Alt /> },
//     { id: 6, label: "Git", icon: <SiGit /> },
//   ];

//   const outerTechs = [
//     { id: 7, label: "Node.js", icon: <FaNodeJs /> },
//     { id: 8, label: "Express", icon: <SiExpress /> },
//     { id: 9, label: "MongoDB", icon: <SiMongodb /> },
//     { id: 10, label: "SQL", icon: <FaDatabase /> },
//     { id: 11, label: "Docker", icon: <SiDocker /> },
//     { id: 12, label: "AWS", icon: <FaAws /> },
//   ];

//   const innerAngles = useMemo(() => {
//     const step = 360 / innerTechs.length;
//     return innerTechs.map((_, i) => i * step);
//   }, [innerTechs.length]);

//   const outerAngles = useMemo(() => {
//     const step = 360 / outerTechs.length;
//     return outerTechs.map((_, i) => i * step + 15); // small offset for variety
//   }, [outerTechs.length]);

//   // Precompute connector endpoints (for the SVG overlay)
//   const svgSize = orbitSize;
//   const center = { x: svgSize / 2, y: svgSize / 2 };

//   const innerLines = innerAngles.map((deg) => {
//     const p = polar(innerR, deg);
//     return { x1: center.x, y1: center.y, x2: center.x + p.x, y2: center.y + p.y };
//   });

//   const outerLines = outerAngles.map((deg) => {
//     const p = polar(outerR, deg);
//     return { x1: center.x, y1: center.y, x2: center.x + p.x, y2: center.y + p.y };
//   });


//   return (
//     <section id="services" className='flex flex-col items-center'>
//       <SectionHeader
//         title={'Services'}
//         buttonText={'View More'}
//         onClick={() => { navigate('/services'); }}
//         headingDelay="100"
//         buttonDelay="200"
//       >
//         <span className="text-accent">Services</span> I provide
//       </SectionHeader>

//       {/* Services Grid */}
//       <div className="w-full grid grid-auto py-4">
//         {topServices.map((service, idx) => (
//           <ServiceCard
//             key={service.id}
//             {...service}
//             aos="zoom-in-up"
//             aosDelay={idx * 200}
//           />
//         ))}
//       </div>

//       {/* About Section */}
//       <div className="flex items-center justify-center gap-4 p-5 md:flex-col">
//         <div className="flex flex-col md:w-full md:items-center">
//           <Avatar
//             src={'/MyImage.jpg'}
//             alt='image'
//             size='xlarge'
//           />
//         </div>
//         <div className="w-full flex flex-col items-start gap-2 justify-center md:items-center">
//           <SectionHeader title={'About Me'} justify='left' className='md:justify-center md:text-center'>
//             Who I <span className="text-accent">Am</span> & What I <span className="text-accent">Do?</span>
//           </SectionHeader>

//           <Paragraph size={'xs'} color={'muted'} className={'md:text-center mb-3'}>
//             I’m a passionate developer dedicated to building scalable, user-friendly digital solutions. With expertise in modern web and mobile technologies, I help businesses and individuals turn their ideas into impactful products.
//           </Paragraph>

//           <p
//             className="signature text-2xl text-accent text-sm text-shadow"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Tayyaba Sheikh
//           </p>

//           <Button aos={'fade-left'} aosDelay={'200'}>Let's Work Togather</Button>
//         </div>
//       </div>

//       {/* Tech Stack */}
//       <div className="w-full">
//         <SectionHeader
//           title="Tech Stack"
//           headingDelay="100"
//         >
//           <span className="text-accent">Technologies</span> I work with
//         </SectionHeader>

//         <div
//           className="orbit"
//           style={{
//             // Make it easy to tweak sizes with CSS vars
//             "--orbit-size": `${orbitSize}px`,
//             "--center-size": `${centerSize}px`,
//           }}
//           data-aos="zoom-in"
//           data-aos-delay="150"
//         >
//           {/* Animated rings & connectors */}
//           <svg
//             className="orbit__svg"
//             viewBox={`0 0 ${svgSize} ${svgSize}`}
//             width={svgSize}
//             height={svgSize}
//             aria-hidden="true"
//           >
//             {/* dashed orbit rings */}
//             <circle
//               cx={center.x}
//               cy={center.y}
//               r={innerR}
//               className="orbit__ring orbit__ring--inner"
//             />
//             <circle
//               cx={center.x}
//               cy={center.y}
//               r={outerR}
//               className="orbit__ring orbit__ring--outer"
//             />

//             {/* radial connectors */}
//             {[...innerLines, ...outerLines].map((ln, i) => (
//               <line
//                 key={i}
//                 x1={ln.x1}
//                 y1={ln.y1}
//                 x2={ln.x2}
//                 y2={ln.y2}
//                 className="orbit__connector"
//               />
//             ))}
//           </svg>

//           {/* center node */}
//           <div className="orbit__center shadow-md">
//             <div className="orbit__center-core gradient-brand-soft" />
//             <p className="text-sm font-medium text-center">Tech Stack</p>
//           </div>

//           {/* inner ring nodes */}
//           {innerTechs.map((t, i) => (
//             <OrbitNode
//               key={t.id}
//               icon={t.icon}
//               label={t.label}
//               angle={innerAngles[i]}
//               radius={innerR}
//               size={64}
//             />
//           ))}

//           {/* outer ring nodes */}
//           {outerTechs.map((t, i) => (
//             <OrbitNode
//               key={t.id}
//               icon={t.icon}
//               label={t.label}
//               angle={outerAngles[i]}
//               radius={outerR}
//               size={60}
//               delay={150}
//             />
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Services;
