// src/components/shared/TagFilter.jsx
import React from "react";

const TagFilter = ({ tags = [], selectedTag, onChange }) => {
    if (!tags.length) return null;

    return (
        <div className="flex flex-wrap justify-center gap-2 py-4">
            {tags.map((tag, idx) => (
                <button
                    key={tag}
                    onClick={() => onChange(tag)}
                    className={`btn-outline md:text-sm ${selectedTag === tag ? "active" : ""
                        }`}
                    data-aos="zoom-in"
                    data-aos-delay={idx * 100}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
};

export default TagFilter;
