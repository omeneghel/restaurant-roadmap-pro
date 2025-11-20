import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppFloatingButton = () => {
  const [open, setOpen] = useState(false);
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

      // Redirecionar para WhatsApp
      setTimeout(() => {
        const phoneNumber = "5519956909147";
        const message = encodeURIComponent(
          `Olá! Meu nome é ${formData.nome} e gostaria de solicitar um plano de negócios.\n\nNecessidade: ${formData.necessidade}`
        );
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
        setOpen(false);
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
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Abrir WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-secondary">
              Fale Conosco pelo WhatsApp
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="nome">Nome *</Label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seu@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="telefone">Telefone *</Label>
              <Input
                id="telefone"
                value={formData.telefone}
                onChange={handlePhoneChange}
                placeholder="(00) 00000-0000"
                maxLength={15}
                required
              />
            </div>
            <div>
              <Label htmlFor="necessidade">Necessidade *</Label>
              <Textarea
                id="necessidade"
                value={formData.necessidade}
                onChange={(e) => setFormData({ ...formData, necessidade: e.target.value })}
                placeholder="Descreva brevemente sua necessidade"
                rows={3}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar e Abrir WhatsApp"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppFloatingButton;
