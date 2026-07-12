import { getImagePath } from "@/libs/imagePath";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: getImagePath("/images/patient-portal.png"),
    title: "Adit CRM",
    description:
      "Healthcare CRM platform with appointment scheduling, patient management, dashboards and real-time workflow features.",
    tech: ["React", "TypeScript", "REST API"],
  },
  {
    image: getImagePath("/images/project-2.jpg"),
    title: "Patient Portal",
    description:
      "Modern patient portal built with Angular featuring authentication, appointments and responsive user interface.",
    tech: ["Angular", "Bootstrap", "REST API"],
  },
  {
    image: getImagePath("/images/project-3.jpg"),
    title: "Lauren Interiors",
    description:
      "Responsive business website with elegant UI, reusable components and optimized frontend architecture.",
    tech: ["React", "SCSS", "Responsive UI"],
  },
  {
    image: getImagePath("/images/project-4.jpg"),
    title: "Portfolio Website",
    description:
      "Personal portfolio developed using Next.js and Tailwind CSS with Bento-inspired design and smooth animations.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
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