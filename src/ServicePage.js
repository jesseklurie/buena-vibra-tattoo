import React from 'react';
import { useParams } from 'react-router-dom';

function ServicePage() {
  // Get the service name from the route parameter
  const { serviceName } = useParams();

  // A simple object mapping service names to descriptions (can be expanded later)
  const services = {
    tatuajes: {
      title: "Tatuajes",
      description: "Nuestros tatuajes son obras de arte personalizadas para ti. Ofrecemos una amplia gama de estilos."
    },
    piercings: {
      title: "Piercings",
      description: "Realizamos piercings con la mejor higiene y profesionalismo. Elige entre una variedad de diseños y ubicaciones."
    },
    "catalogo-de-joyeria": {
      title: "Catálogo de Joyería",
      description: "Explora nuestro catálogo de joyería única, creada especialmente para complementar tus tatuajes."
    },
    "cuidado-de-tatuaje": {
      title: "Cuidado de Tatuajes",
      description: "Te damos las mejores recomendaciones para cuidar tu tatuaje y asegurar una curación óptima."
    }
  };

  const service = services[serviceName];

  return (
    <div>
      <h1>{service ? service.title : "Servicio No Encontrado"}</h1>
      <p>{service ? service.description : "Lo sentimos, no tenemos información sobre este servicio."}</p>
    </div>
  );
}

export default ServicePage;
