import { motion } from "framer-motion";
import { TrendingUp, Plus, Calendar, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";

const investments = [
  { plan: "Professional", amount: "$10,000", roi: "7.5%", earned: "$1,500", startDate: "Nov 1, 2024", status: "Active" },
  { plan: "Starter", amount: "$2,500", roi: "6%", earned: "$375", startDate: "Oct 15, 2024", status: "Active" },
];

export default function InvestmentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Total Invested", value: "$12,500", icon: DollarSign },
            { label: "Monthly ROI", value: "7.5%", icon: TrendingUp },
            { label: "Total Earned", value: "$1,875", icon: TrendingUp },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card variant="glow" className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card variant="premium">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>My Investments</CardTitle>
            <Button variant="premium" size="sm" className="gap-2"><Plus className="w-4 h-4" /> New Investment</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {investments.map((inv, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="font-display font-bold text-lg">{inv.plan} Plan</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Started {inv.startDate}
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <div><div className="text-sm text-muted-foreground">Invested</div><div className="font-bold text-lg">{inv.amount}</div></div>
                      <div><div className="text-sm text-muted-foreground">ROI</div><div className="font-bold text-lg text-primary">{inv.roi}</div></div>
                      <div><div className="text-sm text-muted-foreground">Earned</div><div className="font-bold text-lg text-green-500">{inv.earned}</div></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
