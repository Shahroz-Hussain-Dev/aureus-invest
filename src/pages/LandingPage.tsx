import { motion } from "framer-motion";
import { TrendingUp, Shield, Users, Zap, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: TrendingUp,
    title: "High ROI Returns",
    description: "Earn 6% to 9% monthly returns on your investments with our proven strategies.",
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Your investments are protected with bank-grade security and transparent operations.",
  },
  {
    icon: Users,
    title: "Network Rewards",
    description: "Earn 7% direct commission and up to 10 levels of profit sharing from your team.",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Quick withdrawals within 24 hours and real-time investment tracking.",
  },
];

const plans = [
  {
    name: "Starter",
    investment: "$100 - $999",
    roi: "6%",
    features: ["Monthly ROI", "7% Direct Commission", "2x Investment Cap", "24h Withdrawals"],
    popular: false,
  },
  {
    name: "Professional",
    investment: "$1,000 - $9,999",
    roi: "7.5%",
    features: ["Monthly ROI", "7% Direct Commission", "2.5x Investment Cap", "Priority Support"],
    popular: true,
  },
  {
    name: "Elite",
    investment: "$10,000+",
    roi: "9%",
    features: ["Monthly ROI", "7% Direct Commission", "3x Investment Cap", "VIP Benefits"],
    popular: false,
  },
];

const levels = [
  { level: 1, percentage: 25 },
  { level: 2, percentage: 15 },
  { level: 3, percentage: 7 },
  { level: 4, percentage: 4 },
  { level: 5, percentage: 3 },
  { level: 6, percentage: 2.5 },
  { level: 7, percentage: 2 },
  { level: 8, percentage: 1.5 },
  { level: 9, percentage: 1 },
  { level: 10, percentage: 1 },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
              <Star className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-display font-bold text-primary">GoldVest</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">Benefits</a>
            <a href="#plans" className="text-muted-foreground hover:text-primary transition-colors">Plans</a>
            <a href="#roi" className="text-muted-foreground hover:text-primary transition-colors">ROI</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="premium" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-radial-gold opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-64 h-64 border border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-48 h-48 border border-primary/10 rounded-full"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                <Star className="w-4 h-4" />
                Premium Investment Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            >
              Invest Smart,{" "}
              <span className="text-gold-glow">Grow Wealthy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Join the elite circle of investors earning 6-9% monthly returns. Build your network, 
              multiply your wealth, and secure your financial future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="premium" size="xl" asChild className="group">
                <Link to="/signup">
                  Start Investing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/login">Login to Dashboard</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: "$50M+", label: "Total Invested" },
                { value: "25K+", label: "Active Investors" },
                { value: "9%", label: "Max Monthly ROI" },
                { value: "24h", label: "Withdrawal Time" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why Choose <span className="text-primary">GoldVest</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of investing with our premium features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="premium-card p-6 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section id="plans" className="py-20 md:py-32 relative bg-secondary/20">
        <div className="absolute inset-0 bg-gradient-radial-gold opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Investment <span className="text-primary">Plans</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the plan that fits your investment goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary shadow-[0_0_40px_hsl(45_93%_47%/0.3)]"
                    : "premium-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                  <div className="text-muted-foreground mb-4">{plan.investment}</div>
                  <div className="text-5xl font-display font-bold text-primary">
                    {plan.roi}
                    <span className="text-lg text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Star className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "premium" : "outline"}
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <Link to="/signup">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Levels Section */}
      <section id="roi" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Profit Sharing <span className="text-primary">Levels</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Unlock up to 10 levels of passive income by building your network. 
              Requirement: 10 direct referrals to unlock all levels.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {levels.map((level, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="premium-card p-4 text-center cursor-pointer"
              >
                <div className="text-sm text-muted-foreground mb-1">Level {level.level}</div>
                <div className="text-2xl font-display font-bold text-primary">{level.percentage}%</div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="premium-card p-6 text-center">
              <div className="text-3xl font-display font-bold text-primary mb-2">2x / 3x</div>
              <div className="text-muted-foreground">Investment Cap</div>
              <div className="text-sm text-muted-foreground mt-2">Investor: 2x | Networker: 3x</div>
            </div>
            <div className="premium-card p-6 text-center">
              <div className="text-3xl font-display font-bold text-primary mb-2">$10</div>
              <div className="text-muted-foreground">Min Withdrawal</div>
              <div className="text-sm text-muted-foreground mt-2">10% withdrawal fee</div>
            </div>
            <div className="premium-card p-6 text-center">
              <div className="text-3xl font-display font-bold text-primary mb-2">5%</div>
              <div className="text-muted-foreground">P2P Transfer Fee</div>
              <div className="text-sm text-muted-foreground mt-2">Instant transfers</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-primary">Wealth Journey?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of successful investors who are already growing their wealth with GoldVest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" asChild className="group">
                <Link to="/signup">
                  Create Free Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                <Star className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold text-primary">GoldVest</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 GoldVest. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
