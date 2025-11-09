import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RestaurantBusinessPlan from "./pages/RestaurantBusinessPlan";
import Services from "./pages/Services";
import BusinessPlanService from "./pages/BusinessPlanService";
import MarketResearchService from "./pages/MarketResearchService";
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
        <Route path="/plano-de-negocios-para-restaurante" element={<RestaurantBusinessPlan />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/servicos/plano-de-negocios" element={<BusinessPlanService />} />
        <Route path="/servicos/pesquisa-e-analise-de-mercado" element={<MarketResearchService />} />
        <Route path="/servicos/valuation" element={<ValuationService />} />
        <Route path="/servicos/precificacao" element={<PricingService />} />
        <Route path="/servicos/analise-de-viabilidade-do-investimento" element={<InvestmentAnalysisService />} />
        <Route path="/sobre-nos" element={<About />} />
        <Route path="/cases-de-sucesso" element={<CaseStudies />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
