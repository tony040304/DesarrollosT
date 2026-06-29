import React from "react";

const SkillsDiv = ({ skill }) => {
  return (
    <div className="flex h-8 items-center justify-center gap-x-2 rounded-full border border-neon/20 bg-gradient-to-b from-neon/20 to-transparent px-4 shadow-md hover:shadow-lg">
      <p className="text-white text-sm font-medium leading-normal text-nowrap">
        {skill}
      </p>
    </div>
  );
};

const SkillsH3 = ({ title }) => {
  return (
    <h3 className="text-white text-lg font-bold leading-tight pb-2 pt-4 text-nowrap">
      {title}
    </h3>
  );
};

const DivChildren = ({ children }) => {
  return (
    <section className="flex flex-row gap-2 justify-center items-center mb-4">
      {children}
    </section>
  );
};

export default SkillsH3;
export { SkillsDiv, DivChildren };
  