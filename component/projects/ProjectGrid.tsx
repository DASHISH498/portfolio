import { getImagePath } from "@/libs/imagePath";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: getImagePath("/images/patient-portal.png"),
    title: "Patient Portal",
    description:
      "Modern patient portal built with Angular featuring authentication, appointments and responsive user interface.",
    tech: ["Angular", "Bootstrap"],
    url: "https://app.adit.com/auth/login",
  },
  {
    image: getImagePath("/images/lauren_interior.png"),
    title: "Lauren Interiors",
    description:
      "Responsive business website with elegant UI, reusable components and optimized frontend architecture.",
    tech: ["Shopify"],
    url: "https://www.lauren-interiors.com/",
  },
  {
    image: getImagePath("/images/portfolio.png"),
    title: "Portfolio",
    description: "Personal portfolio developed using Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "ReactJS", "TypeScript"],
    url: "https://dashish498.github.io/portfolio/",
  },
  {
    image: getImagePath("/images/jobnest.png"),
    title: "JobNest Job Portal",
    description:
      "Modern job portal with job search, company listings and responsive UI.",
    tech: ["React", "Tailwind CSS"],
    url: "https://dashish498.github.io/jobnest/",
  },
  {
    image: getImagePath("/images/targetpoint.png"),
    title: "Target Point Defence",
    description:
      "-",
    tech: ["React", "Tailwind CSS"],
    url: "https://targetpointdefence.com/",
  },
  {
    image: getImagePath("/images/codereviewai.png"),
    title: "CodeReview AI",
    description:
      "Compare your code with AI and Get The bug in your code and correct Code.",
    tech: ["React", "Tailwind CSS"],
    url: "https://code-review-ai-rho.vercel.app/",
  },
  {
    image: getImagePath("/images/financeflow.png"),
    title: "FinanceFlow",
    description:
      "Premium finance dashboard built using React and TypeScript.",
    tech: ["React", "Tailwind CSS"],
    url: "https://dashish498.github.io/finance-flow/",
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
          url={project.url}
        />
      ))}
    </section>
  );
}
