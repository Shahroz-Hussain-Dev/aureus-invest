import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

const withdrawalHistory = [
  { amount: "$1,000.00", fee: "$100.00", net: "$900.00", date: "Dec 8, 2024", status: "Completed" },
  { amount: "$500.00", fee: "$50.00", net: "$450.00", date: "Dec 1, 2024", status: "Completed" },
  { amount: "$750.00", fee: "$75.00", net: "$675.00", date: "Nov 25, 2024", status: "Completed" },
];

export default function WithdrawPage() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const walletBalance = 3250;
  const fee = amount ? parseFloat(amount) * 0.1 : 0;
  const netAmount = amount ? parseFloat(amount) - fee : 0;
  const minWithdrawal = 10;

  const handleWithdraw = async () => {
    if (!amount || parseFloat(amount) < minWithdrawal) {
      toast({
        title: "Invalid amount",
        description: `Minimum withdrawal is $${minWithdrawal}`,
        variant: "destructive",
      });
      return;
    }

    if (parseFloat(amount) > walletBalance) {
      toast({
        title: "Insufficient balance",
        description: "You don't have enough balance for this withdrawal",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Withdrawal requested!",
      description: `$${netAmount.toFixed(2)} will be processed within 24 hours.`,
    });
    
    setAmount("");
    setLoading(false);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Withdrawal Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card variant="premium" className="overflow-hidden">
            <CardHeader className="border-b border-border/50">
              <CardTitle className="flex items-center gap-2">
                <ArrowDownToLine className="w-5 h-5 text-primary" />
                Withdraw Funds
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Form */}
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Available Balance</label>
                    <div className="text-3xl font-display font-bold text-primary">${walletBalance.toFixed(2)}</div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Withdrawal Amount</label>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      min={minWithdrawal}
                      max={walletBalance}
                    />
                    <p className="text-xs text-muted-foreground">Minimum: ${minWithdrawal}</p>
                  </div>

                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full"
                    onClick={handleWithdraw}
                    disabled={loading || !amount}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>Request Withdrawal</>
                    )}
                  </Button>
                </div>

                {/* Summary */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Withdrawal Summary</h3>
                  
                  <div className="space-y-3 p-4 rounded-xl bg-secondary/30">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount</span>
                      <span className="font-medium">${amount || "0.00"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fee (10%)</span>
                      <span className="font-medium text-red-500">-${fee.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-border/50 pt-3 flex justify-between">
                      <span className="font-semibold">You Receive</span>
                      <span className="font-bold text-xl text-primary">${netAmount.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-primary">Processing Time</p>
                      <p className="text-muted-foreground">Withdrawals are processed within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Withdrawal History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card variant="premium">
            <CardHeader>
              <CardTitle>Withdrawal History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {withdrawalHistory.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <div className="font-semibold">{item.amount}</div>
                        <div className="text-sm text-muted-foreground">Fee: {item.fee}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">{item.net}</div>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
