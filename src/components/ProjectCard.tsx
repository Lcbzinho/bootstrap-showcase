import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  delay?: number;
}

const ProjectCard = ({ image, category, title, description, delay = 0 }: ProjectCardProps) => {
  return (
    <article
      className="card-hover group bg-card rounded-xl overflow-hidden border border-border animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        <button className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors">
          Ver mais
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
