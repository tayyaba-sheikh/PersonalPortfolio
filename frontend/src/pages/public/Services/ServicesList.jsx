import React, { useState } from "react";
import SectionHeader from "../../../components/shared/SectionHeader";
import ServiceCard from "../../../components/shared/ServiceCard";
import TagFilter from "../../../components/shared/TagFilter";
import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode className="card-icon" />,
    title: "Web Development",
    description: "Full-stack web development with modern frameworks.",
    tags: ["Web", "Frontend", "Backend"],
  },
  {
    id: 2,
    icon: <FaMobileAlt className="card-icon" />,
    title: "Mobile Development",
    description: "Cross-platform mobile applications with seamless UX.",
    tags: ["Mobile", "React Native", "Flutter"],
  },
  {
    id: 3,
    icon: <FaPaintBrush className="card-icon" />,
    title: "UI/UX Design",
    description: "Modern designs that enhance usability and engagement.",
    tags: ["Design", "UI", "UX"],
  },
  {
    id: 4,
    icon: <FaCloud className="card-icon" />,
    title: "Cloud Solutions",
    description: "Reliable cloud-native solutions & integrations.",
    tags: ["Cloud", "AWS", "Deployment"],
  },
];

const ServicesList = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", ...new Set(services.flatMap((s) => s.tags))];

  const filteredServices =
    selectedTag === "All"
      ? services
      : services.filter((s) => s.tags.includes(selectedTag));

  return (
    <section className="container border-left border-right flex flex-col items-center text-center py-5">
      <SectionHeader title="All Services" headingDelay="100">
        Complete <span className="text-accent">Services</span> Offered
      </SectionHeader>

      {/* Reusable TagFilter */}
      <TagFilter
        tags={allTags}
        selectedTag={selectedTag}
        onChange={setSelectedTag}
      />

      {/* Services Grid */}
      <div className="w-full grid grid-auto gap-3 py-4">
        {filteredServices.map((service, idx) => (
          <ServiceCard
            key={service.id}
            {...service}
            aos="fade-up"
            aosDelay={idx * 150}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
