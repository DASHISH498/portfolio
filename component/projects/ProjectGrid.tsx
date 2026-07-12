import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "/images/project-1.jpg",
    title: "OkChiller",
    description:
      "Responsive web application developed using React with reusable components and REST API integration.",
    tech: ["React", "TypeScript", "REST API"],
  },
  {
    image: "/images/project-2.jpg",
    title: "Patient Portal",
    description:
      "Healthcare portal with authentication, dashboard and responsive UI built using Angular.",
    tech: ["Angular", "Bootstrap", "API"],
  },
  {
    image: "/images/project-3.jpg",
    title: "Lauren Interiors",
    description:
      "Modern interior design website focused on responsive layouts and premium user experience.",
    tech: ["React", "CSS", "Responsive"],
  },
  {
    image: "/images/project-4.jpg",
    title: "Target Point Defence",
    description:
      "Enterprise web application with scalable frontend architecture and reusable components.",
    tech: ["Angular", "TypeScript", "SCSS"],
  },
];

export default function ProjectGrid() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          {...project}
        />
      ))}

    </section>
  );
}