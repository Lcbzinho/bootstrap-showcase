import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold text-foreground">
            <span className="text-accent">Dev</span>Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Início
            </a>
            <a href="#projetos" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Projetos
            </a>
            <a href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Início
              </a>
              <a href="#projetos" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Projetos
              </a>
              <a href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
