import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BusinessPlan from "./pages/BusinessPlan";
import BusinessPlanRestaurant from "./pages/BusinessPlanRestaurant";
import BusinessPlanTemplate from "./pages/BusinessPlanTemplate";
import Services from "./pages/Services";
import BusinessPlanService from "./pages/BusinessPlanService";
import BusinessPlanHamburguerias from "./pages/hamburguerias";
import BusinessPlanPizzarias from "./pages/pizzarias";
import BusinessPlanFarmacias from "./pages/farmacias";
import BusinessPlanAcademias from "./pages/academias";
import MarketResearchService from "./pages/MarketResearchService";
import BusinessConsultingService from "./pages/BusinessConsultingService";
import ValuationService from "./pages/ValuationService";
import PricingService from "./pages/PricingService";
import InvestmentAnalysisService from "./pages/InvestmentAnalysisService";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />

        {/* Business Plan Routes - New Structure */}
        <Route path="/plano-de-negocios" element={<BusinessPlan />} />
        <Route path="/plano-de-negocios/restaurante" element={<BusinessPlanRestaurant />} />
        <Route path="/plano-de-negocios/hamburguerias" element={<BusinessPlanHamburguerias />} />
        <Route path="/plano-de-negocios/pizzarias" element={<BusinessPlanPizzarias />} />
        <Route path="/plano-de-negocios/farmacias" element={<BusinessPlanFarmacias />} />
        <Route path="/plano-de-negocios/academias" element={<BusinessPlanAcademias />} />

        {/* Rota dinâmica para plano de negócios */}
        <Route path="/plano-de-negocios/:slug" element={<BusinessPlanTemplate />} />

        {/* Old Route - Redirect handled by template */}
        <Route path="/plano-de-negocios-para-restaurante" element={<BusinessPlanRestaurant />} />

        {/* Services Routes */}
        <Route path="/servicos" element={<Services />} />
        <Route path="/servicos/plano-de-negocios" element={<BusinessPlanService />} />
        <Route path="/servicos/pesquisa-e-analise-de-mercado" element={<MarketResearchService />} />
        <Route path="/servicos/valuation" element={<ValuationService />} />
        <Route path="/servicos/precificacao" element={<PricingService />} />
        <Route path="/servicos/analise-de-viabilidade-do-investimento" element={<InvestmentAnalysisService />} />
        <Route path="/servicos/consultoria-empresarial" element={<BusinessConsultingService />} />

        {/* Other Pages */}
        <Route path="/sobre-nos" element={<About />} />
        <Route path="/cases-de-sucesso" element={<CaseStudies />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
