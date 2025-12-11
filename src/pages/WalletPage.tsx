import { motion } from "framer-motion";
import { Wallet, Plus, History, TrendingUp, ArrowDownToLine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";

const transactions = [
  { type: "Deposit", amount: "+$5,000.00", date: "Dec 10, 2024", status: "Completed", method: "Bank Transfer" },
  { type: "ROI Credit", amount: "+$375.00", date: "Dec 9, 2024", status: "Completed", method: "System" },
  { type: "Withdrawal", amount: "-$1,000.00", date: "Dec 8, 2024", status: "Completed", method: "Bank Transfer" },
  { type: "Commission", amount: "+$250.00", date: "Dec 7, 2024", status: "Completed", method: "Referral" },
  { type: "P2P Received", amount: "+$500.00", date: "Dec 6, 2024", status: "Completed", method: "User Transfer" },
  { type: "P2P Sent", amount: "-$200.00", date: "Dec 5, 2024", status: "Completed", method: "User Transfer" },
];

export default function WalletPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Balance Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="glow" className="p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Wallet className="w-5 h-5" />
                  <span>Available Balance</span>
                </div>
                <div className="text-4xl font-display font-bold text-primary mb-4">$3,250.00</div>
                <div className="flex gap-2">
                  <Button variant="premium" size="sm" className="gap-2">
                    <Plus className="w-4 h-4" /> Deposit
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ArrowDownToLine className="w-4 h-4" /> Withdraw
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card variant="stats" className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <TrendingUp className="w-5 h-5" />
                <span>Total Earned</span>
              </div>
              <div className="text-4xl font-display font-bold mb-2">$8,750.00</div>
              <div className="text-sm text-green-500 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> +$1,250 this month
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card variant="stats" className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <ArrowDownToLine className="w-5 h-5" />
                <span>Total Withdrawn</span>
              </div>
              <div className="text-4xl font-display font-bold mb-2">$5,500.00</div>
              <div className="text-sm text-muted-foreground">Last: Dec 8, 2024</div>
            </Card>
          </motion.div>
        </div>

        {/* Transaction History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card variant="premium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="w-5 h-5 text-primary" />
                Transaction History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {transactions.map((tx, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        tx.amount.startsWith("+") ? "bg-green-500/20" : "bg-red-500/20"
                      }`}>
                        {tx.amount.startsWith("+") ? (
                          <TrendingUp className={`w-6 h-6 ${tx.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`} />
                        ) : (
                          <ArrowDownToLine className="w-6 h-6 text-red-500" />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold">{tx.type}</div>
                        <div className="text-sm text-muted-foreground">{tx.method}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold text-lg ${
                        tx.amount.startsWith("+") ? "text-green-500" : "text-red-500"
                      }`}>
                        {tx.amount}
                      </div>
                      <div className="text-sm text-muted-foreground">{tx.date}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
