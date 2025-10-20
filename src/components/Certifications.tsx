import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Award, Shield, CheckCircle, Star } from "lucide-react";

export function Certifications() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      icon: Award,
      name: "FEIO",
      description: "Federation of Indian Export Organisations",
      color: "text-amber-600",
    },
    {
      icon: Shield,
      name: "IEC",
      description: "Import Export Code Licence",
      color: "text-green-600",
    },
    {
      icon: CheckCircle,
      name: "MSME",
      description: "Ministry of Micro, Small & Medium Enterprises",
      color: "text-blue-600",
    },
    {
      icon: Star,
      name: "Spice Board",
      description: "Spices Board India",
      color: "text-purple-600",
    },
    {
      icon: Award,
      name: "Apeda",
      description: "Agricultural and Processed Food Products Export Development Authority",
      color: "text-emerald-600",
    },
    {
      icon: Shield,
      name: "DGFT",
      description: "Directorate General of Foreign Trade",
      color: "text-indigo-600",
    }
  ];

  return (
    <section id="certifications" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Certifications
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Certified excellence. Trusted worldwide. Our credentials ensure the
            highest standards in every aspect of our operations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover-lift shadow-card border-none h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background mb-4">
                  <cert.icon className={`h-8 w-8 ${cert.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
                <Badge
                  variant="secondary"
                  className="mt-4 bg-accent/10 text-accent hover:bg-accent/20"
                >
                  Verified
                </Badge>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
