// src/pages/public/Works/ProjectsList.jsx
import React, { useState } from "react";
import SectionHeader from "../../../components/shared/SectionHeader";
import { projects } from "../../../data/projectsData";
import ProjectCard from "../../../components/shared/ProjectCard";

const ProjectsList = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  // Collect unique tags
  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  // Filtered projects
  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <section className="container border-left border-right flex flex-col items-center text-center py-5">
      <SectionHeader
        title="All Projects"
        headingDelay="100"
      >
        Complete <span className="text-accent">Portfolio</span>
      </SectionHeader>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 py-4">
        {allTags.map((tag, idx) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`btn-outline md:text-xs ${selectedTag === tag ? "active" : ""
              }`}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className={`w-full grid grid-auto gap-3 py-4`}>
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            {...project}
            aos="fade-up"
            aosDelay={idx * 150}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
