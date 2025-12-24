import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { User, Mail, Phone, Send } from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})/, "($1) ")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return value.slice(0, 15);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({
      ...prev,
      telefone: formatted,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Cadastro realizado com sucesso!",
      description: `Bem-vindo(a), ${formData.nome}!`,
    });

    setFormData({ nome: "", email: "", telefone: "" });
    setIsLoading(false);
  };

  return (
    <div className="form-container w-full max-w-md rounded-2xl bg-card p-8 md:p-10 card">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl card-title">
          Cadastro
        </h1>
        <p className="text-muted-foreground card-text">
          Preencha seus dados para se cadastrar
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2 mb-3">
          <Label htmlFor="nome" className="text-sm font-medium text-foreground form-label">
            Nome completo
          </Label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="pl-12 form-control"
            />
          </div>
        </div>

        <div className="space-y-2 mb-3">
          <Label htmlFor="email" className="text-sm font-medium text-foreground form-label">
            E-mail
          </Label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="pl-12 form-control"
            />
          </div>
        </div>

        <div className="space-y-2 mb-3">
          <Label htmlFor="telefone" className="text-sm font-medium text-foreground form-label">
            Telefone
          </Label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.telefone}
              onChange={handlePhoneChange}
              required
              className="pl-12 form-control"
            />
          </div>
        </div>

        <Button
          type="submit"
          variant="gradient"
          size="lg"
          className="w-full btn btn-primary"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg
                className="h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Enviando...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Enviar Cadastro
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
