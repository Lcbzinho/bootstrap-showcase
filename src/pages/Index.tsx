import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Web Design",
    title: "E-commerce Moderno",
    description: "Plataforma de vendas online com design responsivo e experiência de usuário otimizada.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Dashboard",
    title: "Analytics Dashboard",
    description: "Painel de análise de dados com visualizações interativas e relatórios em tempo real.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    category: "Mobile App",
    title: "App de Finanças",
    description: "Aplicativo para gestão financeira pessoal com integração bancária e insights.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1522542550221-31fd8575f4e9?w=600&h=400&fit=crop",
    category: "Branding",
    title: "Identidade Visual",
    description: "Projeto completo de branding incluindo logo, paleta de cores e guidelines.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
    category: "UX/UI",
    title: "Redesign de Produto",
    description: "Reformulação completa da experiência do usuário para plataforma SaaS.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    category: "Desenvolvimento",
    title: "Portal Corporativo",
    description: "Website institucional com CMS personalizado e integração com sistemas internos.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Carousel Section */}
        <section className="container mx-auto px-4 py-8">
          <Carousel />
        </section>

        {/* Projects Grid Section */}
        <section id="projetos" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Portfólio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Nossos Projetos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos projetos mais recentes desenvolvidos com dedicação e atenção aos detalhes.
            </p>
          </div>

          {/* Responsive Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                category={project.category}
                title={project.title}
                description={project.description}
                delay={index * 100}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Vamos criar algo incrível juntos?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Entre em contato e transforme suas ideias em realidade com soluções digitais de alta qualidade.
            </p>
            <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-lg">
              Fale Conosco
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
