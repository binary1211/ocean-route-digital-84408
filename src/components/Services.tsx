import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Ship,
  FileCheck,
  Thermometer,
  Search,
  TrendingUp,
  Package,
} from "lucide-react";

export function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Ship,
      title: "Freight Forwarding",
      description:
        "Comprehensive sea, air, and land freight solutions tailored to your needs. We ensure timely and cost-effective delivery worldwide.",
    },
    {
      icon: FileCheck,
      title: "Customs Clearance",
      description:
        "Expert handling of all customs documentation and procedures. Navigate complex regulations with our experienced team.",
    },
    {
      icon: Thermometer,
      title: "Cold Chain Logistics",
      description:
        "Temperature-controlled transportation for perishable goods. Maintain product quality from origin to destination.",
    },
    {
      icon: Search,
      title: "Quality Inspection",
      description:
        "Rigorous quality control and inspection services. Ensure your products meet international standards and specifications.",
    },
    {
      icon: TrendingUp,
      title: "Logistics Consulting",
      description:
        "Strategic guidance to optimize your supply chain. Reduce costs and improve efficiency with our expertise.",
    },
    {
      icon: Package,
      title: "Warehousing & Distribution",
      description:
        "Secure storage facilities and efficient distribution networks. Keep your inventory safe and accessible.",
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for all your international trade needs.
            From logistics to compliance, we've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full border-none shadow-card hover:shadow-ocean transition-all duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
