import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const BusinessPlanContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    necessidade: "",
  });

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, telefone: formatted });
  };

  const getUrlParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      page_url: window.location.href,
      utm_source: params.get("utm_source") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      gclid: params.get("gclid") || "",
      fbc: params.get("fbc") || "",
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.telefone || !formData.necessidade) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const urlParams = getUrlParams();
      const payload = {
        ...formData,
        ...urlParams,
      };

      await fetch("https://hook.us1.make.com/rbl9u3n5xb9ff2rwhkdi0hh4sfv3ynu1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      toast({
        title: "Sucesso!",
        description: "Seus dados foram enviados. Redirecionando para o WhatsApp...",
      });

      // Disparar evento no Google Tag Manager com dados do formulário
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'form_sent',
        form_data: {
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          necessidade: formData.necessidade,
          ...urlParams
        }
      });

      setTimeout(() => {
        const phoneNumber = "5519956909147";
        const message = encodeURIComponent(
          `Olá! Meu nome é ${formData.nome} e gostaria de solicitar um plano de negócios.\n\nNecessidade: ${formData.necessidade}`
        );
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
        setFormData({ nome: "", email: "", telefone: "", necessidade: "" });
      }, 1500);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full shadow-lg max-w-full">
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-6 text-secondary">
          Solicite Seu Plano de Negócios
        </h3>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <Input
            type="text"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            placeholder="Nome"
            required
            className="w-full"
          />
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email"
            required
            className="w-full"
          />
          <Input
            type="tel"
            value={formData.telefone}
            onChange={handlePhoneChange}
            placeholder="Telefone"
            maxLength={15}
            required
            className="w-full"
          />
          <Textarea
            value={formData.necessidade}
            onChange={(e) => setFormData({ ...formData, necessidade: e.target.value })}
            placeholder="Descreva sua necessidade"
            rows={3}
            required
            className="w-full resize-none"
          />
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 sm:py-6 text-xs sm:text-sm whitespace-normal leading-tight"
            disabled={loading}
          >
            {loading ? "ENVIANDO..." : "SOLICITAR PLANO DE NEGÓCIOS"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BusinessPlanContactForm;
