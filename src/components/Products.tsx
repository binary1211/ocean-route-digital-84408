import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Carrot, Wheat, Bean, Flame, Package2 } from "lucide-react";

export function Products() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      icon: Apple,
      category: "Fruits",
      items: "Mangoes, Bananas, Pomegranates, Grapes, Citrus",
      description:
        "Fresh, premium quality fruits sourced from certified farms. Expertly packaged to maintain freshness during transit.",
      gradient: "from-red-500/10 to-orange-500/10",
      iconColor: "text-red-600",
    },
    {
      icon: Carrot,
      category: "Vegetables",
      items: "Onions, Potatoes, Tomatoes, Peppers, Leafy Greens",
      description:
        "Farm-fresh vegetables meeting international quality standards. Available year-round with cold chain support.",
      gradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600",
    },
    {
      icon: Wheat,
      category: "Cereals",
      items: "Rice, Wheat, Corn, Millets, Barley",
      description:
        "High-grade cereals from prime agricultural regions. Clean, sorted, and ready for global distribution.",
      gradient: "from-amber-500/10 to-yellow-500/10",
      iconColor: "text-amber-600",
    },
    {
      icon: Bean,
      category: "Legumes & Pulses",
      items: "Lentils, Chickpeas, Beans, Peas, Soybeans",
      description:
        "Protein-rich pulses with excellent nutritional value. Carefully processed and quality tested.",
      gradient: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-600",
    },
    {
      icon: Flame,
      category: "Spices",
      items: "Turmeric, Chili, Cumin, Cardamom, Pepper",
      description:
        "Aromatic spices with authentic flavors. Hygienically processed to preserve natural qualities.",
      gradient: "from-red-500/10 to-pink-500/10",
      iconColor: "text-rose-600",
    },
    {
      icon: Package2,
      category: "Flours",
      items: "Wheat Flour, Rice Flour, Chickpea Flour, Multi-grain",
      description:
        "Finely milled flours with consistent quality. Suitable for various culinary applications.",
      gradient: "from-yellow-500/10 to-amber-500/10",
      iconColor: "text-yellow-700",
    },
  ];

  return (
    <section id="products" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Premium agricultural products from trusted sources. We trade in a
            diverse range of high-quality commodities for global markets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className={`h-full border-none shadow-card hover:shadow-ocean transition-all duration-300 bg-gradient-to-br ${product.gradient}`}
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-background mb-4">
                    <product.icon className={`h-7 w-7 ${product.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl">{product.category}</CardTitle>
                  <CardDescription className="text-sm font-medium text-foreground/70">
                    {product.items}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
