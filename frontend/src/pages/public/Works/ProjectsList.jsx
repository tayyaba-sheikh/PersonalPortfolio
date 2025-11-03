import React, { useState } from "react";
import SectionHeader from "../../../components/shared/SectionHeader";
import { projects } from "../../../data/projectsData";
import ProjectCard from "../../../components/shared/ProjectCard";
import TagFilter from "../../../components/shared/TagFilter";

const ProjectsList = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <section className="container border-left border-right flex flex-col items-center text-center py-5">
      <SectionHeader title="All Projects" headingDelay="100">
        Complete <span className="text-accent">Portfolio</span>
      </SectionHeader>

      {/* TagFilter */}
      <TagFilter
        tags={allTags}
        selectedTag={selectedTag}
        onChange={setSelectedTag}
      />

      {/* Projects Grid */}
      <div className="w-full grid grid-auto gap-3 py-4">
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
