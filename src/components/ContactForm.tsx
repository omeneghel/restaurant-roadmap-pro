import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Capturar parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    const urlParams = {
      page_url: window.location.href,
      utm_source: params.get("utm_source") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      gclid: params.get("gclid") || "",
      fbc: params.get("fbc") || "",
    };
    
    // Disparar evento no Google Tag Manager com dados do formulário
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'form_sent',
      form_data: {
        name: formData.nome,
        email: formData.email,
        phone: formData.telefone,
        message: formData.mensagem,
        ...urlParams
      }
    });
    
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <Card className="bg-white shadow-lg sticky top-4 w-full">
      <CardHeader className="px-4 md:px-6">
        <CardTitle className="text-xl md:text-2xl text-secondary">Solicite seu Plano de Negócios!</CardTitle>
        <p className="text-xs md:text-sm text-muted-foreground">
          Preencha o formulário abaixo e nossa equipe entrará em contato
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
              placeholder="Mensagem (opcional)"
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              rows={4}
              className="w-full text-sm md:text-base resize-none"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-sm md:text-base">
            SOLICITAR ATENDIMENTO
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
