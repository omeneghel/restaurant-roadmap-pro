import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { X, MessageCircle } from "lucide-react";
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

      // Disparar evento no Google Tag Manager
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'form_sent'
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
        <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden">
          <div className="bg-[#2d5f5d] text-white px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Olá! Fale conosco via WhatsApp
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-3 bg-[#f5f5f5]">
            <Input
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              placeholder="Nome"
              className="bg-white border-gray-300"
              required
            />
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Email"
              className="bg-white border-gray-300"
              required
            />
            <Input
              value={formData.telefone}
              onChange={handlePhoneChange}
              placeholder="Telefone"
              className="bg-white border-gray-300"
              maxLength={15}
              required
            />
            <Textarea
              value={formData.necessidade}
              onChange={(e) => setFormData({ ...formData, necessidade: e.target.value })}
              placeholder="Necessidade"
              className="bg-white border-gray-300 resize-none"
              rows={3}
              required
            />
            <Button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-6 text-base flex items-center justify-center gap-2"
              disabled={loading}
            >
              <MessageCircle className="w-5 h-5" />
              {loading ? "Enviando..." : "Falar com Especialista"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppFloatingButton;
