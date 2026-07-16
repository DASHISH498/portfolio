import { getImagePath } from "@/libs/imagePath";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: getImagePath("/images/patient-portal.png"),
    title: "Patient Portal",
    description:
      "Modern patient portal built with Angular featuring authentication, appointments and responsive user interface.",
    tech: ["Angular", "Bootstrap"],
  },
  {
    image: getImagePath("/images/lauren_interior.png"),
    title: "Lauren Interiors",
    description:
      "Responsive business website with elegant UI, reusable components and optimized frontend architecture.",
    tech: ["Shopify"],
  },
  {
    image: getImagePath("/images/portfolio.png"),
    title: "Portfolio",
    description:
      "Personal portfolio developed using Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "ReactJS", "TypeScript"],
  },
];

export default function ProjectGrid() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard 
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            tech={project.tech}
        />
      ))}
    </section>
  );
}