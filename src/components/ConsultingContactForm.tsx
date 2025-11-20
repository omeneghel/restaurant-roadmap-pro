import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const ConsultingContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitação enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <Card className="bg-white shadow-lg w-full">
      <CardHeader className="px-4 md:px-6">
        <CardTitle className="text-xl md:text-2xl text-secondary">Solicite seu Diagnóstico Gratuito!</CardTitle>
        <p className="text-xs md:text-sm text-muted-foreground">
          Preencha o formulário e nossa equipe entrará em contato em até 24 horas
        </p>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Nome Completo"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              required
              className="w-full text-sm md:text-base"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Seu Melhor E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full text-sm md:text-base"
            />
          </div>
          <div>
            <Input
              placeholder="Telefone/WhatsApp"
              value={formData.telefone}
              onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
              required
              className="w-full text-sm md:text-base"
            />
          </div>
          <div>
            <Textarea
              placeholder="Conte-nos sobre suas necessidades (opcional)"
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              rows={4}
              className="w-full text-sm md:text-base resize-none"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-sm md:text-base">
            SOLICITAR DIAGNÓSTICO GRATUITO
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultingContactForm;
