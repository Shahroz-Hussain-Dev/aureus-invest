import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightLeft, User, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

const transferHistory = [
  { type: "Sent", userId: "GV-45678", amount: "$200.00", fee: "$10.00", date: "Dec 5, 2024" },
  { type: "Received", userId: "GV-12345", amount: "$500.00", fee: "$0.00", date: "Dec 6, 2024" },
  { type: "Sent", userId: "GV-98765", amount: "$100.00", fee: "$5.00", date: "Dec 3, 2024" },
];

export default function P2PTransferPage() {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const walletBalance = 3250;
  const fee = amount ? parseFloat(amount) * 0.05 : 0;
  const totalDeducted = amount ? parseFloat(amount) + fee : 0;

  const handleTransfer = async () => {
    if (!userId || !amount) {
      toast({
        title: "Missing information",
        description: "Please enter user ID and amount",
        variant: "destructive",
      });
      return;
    }

    if (totalDeducted > walletBalance) {
      toast({
        title: "Insufficient balance",
        description: "You don't have enough balance for this transfer",
        variant: "destructive",
      });
      return;
    }

    setShowConfirm(true);
  };

  const confirmTransfer = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Transfer successful!",
      description: `$${amount} has been sent to ${userId}`,
    });
    
    setUserId("");
    setAmount("");
    setShowConfirm(false);
    setLoading(false);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Transfer Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card variant="premium" className="overflow-hidden">
            <CardHeader className="border-b border-border/50">
              <CardTitle className="flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-primary" />
                P2P Transfer
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Form */}
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Balance</label>
                    <div className="text-3xl font-display font-bold text-primary">${walletBalance.toFixed(2)}</div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Recipient User ID</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Enter user ID (e.g., GV-12345)"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="pl-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Transfer Amount</label>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      min={1}
                    />
                  </div>

                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full"
                    onClick={handleTransfer}
                    disabled={!userId || !amount}
                  >
                    Transfer Now
                  </Button>
                </div>

                {/* Summary */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Transfer Summary</h3>
                  
                  <div className="space-y-3 p-4 rounded-xl bg-secondary/30">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Recipient</span>
                      <span className="font-medium">{userId || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount</span>
                      <span className="font-medium">${amount || "0.00"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fee (5%)</span>
                      <span className="font-medium text-red-500">-${fee.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-border/50 pt-3 flex justify-between">
                      <span className="font-semibold">Total Deducted</span>
                      <span className="font-bold text-xl text-primary">${totalDeducted.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-primary">Instant Transfer</p>
                      <p className="text-muted-foreground">P2P transfers are processed instantly</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Confirmation Modal */}
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="premium-card p-6 max-w-md w-full"
            >
              <h3 className="text-xl font-display font-bold mb-4">Confirm Transfer</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between p-3 rounded-lg bg-secondary/30">
                  <span className="text-muted-foreground">To</span>
                  <span className="font-semibold">{userId}</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-secondary/30">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-semibold">${amount}</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-secondary/30">
                  <span className="text-muted-foreground">Fee</span>
                  <span className="font-semibold text-red-500">-${fee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-primary/10">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-primary">${totalDeducted.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowConfirm(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="premium"
                  className="flex-1"
                  onClick={confirmTransfer}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    "Confirm"
                  )}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Transfer History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card variant="premium">
            <CardHeader>
              <CardTitle>Transfer History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {transferHistory.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        item.type === "Received" ? "bg-green-500/20" : "bg-primary/20"
                      }`}>
                        <ArrowRightLeft className={`w-6 h-6 ${
                          item.type === "Received" ? "text-green-500" : "text-primary"
                        }`} />
                      </div>
                      <div>
                        <div className="font-semibold">{item.type} to {item.userId}</div>
                        <div className="text-sm text-muted-foreground">Fee: {item.fee}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${
                        item.type === "Received" ? "text-green-500" : "text-primary"
                      }`}>
                        {item.type === "Received" ? "+" : "-"}{item.amount}
                      </div>
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
