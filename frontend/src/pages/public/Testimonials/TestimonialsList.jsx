import React, { useState } from "react";
import SectionHeader from "../../../components/shared/SectionHeader";
import TagFilter from "../../../components/shared/TagFilter";
import TestimonialCard from "../../../components/shared/TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, StartupX",
    quote:
      "Working with you was a fantastic experience. You delivered on time with great quality.",
    avatar: "/User.jpeg",
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "CTO, Innovatech",
    quote: "Professional, reliable, and skilled. You exceeded our expectations.",
    avatar: "/User.jpeg",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Product Manager, DesignHub",
    quote: "Your work brought our vision to life beautifully. Highly recommended!",
    avatar: "/User.jpeg",
  },
];

const TestimonialsList = () => {

  return (
    <section className="container border-left border-right flex flex-col items-center text-center py-5">
      <SectionHeader title="All Testimonials" headingDelay="100">
        What <span className="text-accent">People Say</span>
      </SectionHeader>

      {/* Testimonials Grid */}
      <div className="w-full grid grid-auto gap-3 py-4">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={testimonial.id}
            text={testimonial.quote}
            name={testimonial.name}
            role={testimonial.role}
            image={testimonial.avatar}
            aos="fade-up"
            aosDelay={idx * 150}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsList;
