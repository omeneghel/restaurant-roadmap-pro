import { useParams, Navigate } from "react-router-dom";
import BusinessPlanRestaurant from "./BusinessPlanRestaurant";

// Template para páginas programáticas de plano de negócios
// Quando novos conteúdos forem adicionados em src/content/, 
// este componente renderizará a página apropriada com base no slug

const BusinessPlanTemplate = () => {
  const { slug } = useParams();

  // Mapeamento de slugs para componentes
  const slugMap: Record<string, JSX.Element> = {
    'restaurante': <BusinessPlanRestaurant />
  };

  // Se o slug existir no mapeamento, renderizar o componente
  if (slug && slugMap[slug]) {
    return slugMap[slug];
  }

  // Se não existir, redirecionar para 404
  return <Navigate to="/404" replace />;
};

export default BusinessPlanTemplate;
