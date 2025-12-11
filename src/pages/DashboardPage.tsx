import { motion } from "framer-motion";
import {
  TrendingUp,
  Wallet,
  Users,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Target,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";

const stats = [
  {
    label: "Total Investment",
    value: "$12,500.00",
    change: "+$2,500",
    changeType: "positive",
    icon: DollarSign,
  },
  {
    label: "Current ROI",
    value: "$1,875.00",
    change: "7.5% monthly",
    changeType: "positive",
    icon: TrendingUp,
  },
  {
    label: "Direct Commission",
    value: "$875.00",
    change: "7% earned",
    changeType: "positive",
    icon: Zap,
  },
  {
    label: "Wallet Balance",
    value: "$3,250.00",
    change: "Available",
    changeType: "neutral",
    icon: Wallet,
  },
];

const levels = [
  { level: 1, percentage: 25, earned: "$625.00", members: 12 },
  { level: 2, percentage: 15, earned: "$375.00", members: 28 },
  { level: 3, percentage: 7, earned: "$175.00", members: 56 },
  { level: 4, percentage: 4, earned: "$100.00", members: 89 },
  { level: 5, percentage: 3, earned: "$75.00", members: 134 },
];

const recentTransactions = [
  { type: "ROI", amount: "+$93.75", date: "Today", status: "Completed" },
  { type: "Commission", amount: "+$43.75", date: "Yesterday", status: "Completed" },
  { type: "Withdrawal", amount: "-$500.00", date: "2 days ago", status: "Processing" },
  { type: "P2P Received", amount: "+$200.00", date: "3 days ago", status: "Completed" },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="premium-card p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
              Welcome back, <span className="text-primary">John!</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Your investments are performing well. Keep building your network for more rewards.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                <span>Investment Cap: <span className="text-primary font-semibold">2x</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Direct Referrals: <span className="text-primary font-semibold">12</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <span>Levels Unlocked: <span className="text-primary font-semibold">10/10</span></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card variant="stats" className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.changeType === "positive" ? "text-green-500" : "text-muted-foreground"
                  }`}>
                    {stat.changeType === "positive" && <ArrowUpRight className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Profit Levels & Transactions */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Profit Share Levels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card variant="premium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary" />
                  Profit Share Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {levels.map((level) => (
                    <div
                      key={level.level}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                          L{level.level}
                        </div>
                        <div>
                          <div className="font-medium">Level {level.level}</div>
                          <div className="text-xs text-muted-foreground">{level.members} members</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">{level.earned}</div>
                        <div className="text-xs text-muted-foreground">{level.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card variant="premium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Recent Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((tx, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          tx.amount.startsWith("+") ? "bg-green-500/20" : "bg-red-500/20"
                        }`}>
                          {tx.amount.startsWith("+") ? (
                            <ArrowDownRight className="w-5 h-5 text-green-500" />
                          ) : (
                            <ArrowUpRight className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{tx.type}</div>
                          <div className="text-xs text-muted-foreground">{tx.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold ${
                          tx.amount.startsWith("+") ? "text-green-500" : "text-red-500"
                        }`}>
                          {tx.amount}
                        </div>
                        <div className={`text-xs ${
                          tx.status === "Completed" ? "text-green-500" : "text-primary"
                        }`}>
                          {tx.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Capping Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card variant="glow" className="p-6 text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">2x / 3x</div>
            <div className="text-muted-foreground">Investment Cap</div>
            <div className="text-sm text-muted-foreground mt-2">Investor: 2x | Networker: 3x</div>
          </Card>
          <Card variant="glow" className="p-6 text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">$10</div>
            <div className="text-muted-foreground">Minimum Withdrawal</div>
            <div className="text-sm text-muted-foreground mt-2">24h processing time</div>
          </Card>
          <Card variant="glow" className="p-6 text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">10%</div>
            <div className="text-muted-foreground">Withdrawal Fee</div>
            <div className="text-sm text-muted-foreground mt-2">P2P Fee: 5%</div>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
