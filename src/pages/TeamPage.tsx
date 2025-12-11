import { motion } from "framer-motion";
import { Users, UserPlus, TrendingUp, Copy, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const teamMembers = [
  { name: "Alice Johnson", id: "GV-12345", investment: "$5,000", joined: "Dec 1, 2024", status: "Active" },
  { name: "Bob Smith", id: "GV-12346", investment: "$2,500", joined: "Nov 28, 2024", status: "Active" },
  { name: "Carol Williams", id: "GV-12347", investment: "$10,000", joined: "Nov 25, 2024", status: "Active" },
  { name: "David Brown", id: "GV-12348", investment: "$1,000", joined: "Nov 20, 2024", status: "Active" },
  { name: "Emma Davis", id: "GV-12349", investment: "$3,500", joined: "Nov 15, 2024", status: "Inactive" },
  { name: "Frank Miller", id: "GV-12350", investment: "$7,500", joined: "Nov 10, 2024", status: "Active" },
];

export default function TeamPage() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const referralLink = "https://goldvest.com/ref/GV-98765";

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="glow" className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold">12</div>
                  <div className="text-muted-foreground">Direct Referrals</div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card variant="glow" className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold">$29,500</div>
                  <div className="text-muted-foreground">Team Investment</div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card variant="glow" className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <UserPlus className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">$875</div>
                  <div className="text-muted-foreground">Commission Earned</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Referral Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card variant="premium" className="p-6">
            <h3 className="font-display font-bold text-lg mb-4">Your Referral Link</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 p-4 rounded-xl bg-secondary/50 border border-border/50 font-mono text-sm truncate">
                {referralLink}
              </div>
              <Button
                variant="premium"
                onClick={copyReferralLink}
                className="gap-2"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy Link"}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Share this link to earn 7% direct commission on every referral's investment.
            </p>
          </Card>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card variant="premium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Direct Team Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-4 px-4 font-semibold">Member</th>
                      <th className="text-left py-4 px-4 font-semibold">User ID</th>
                      <th className="text-left py-4 px-4 font-semibold">Investment</th>
                      <th className="text-left py-4 px-4 font-semibold">Joined</th>
                      <th className="text-left py-4 px-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map((member, i) => (
                      <motion.tr
                        key={member.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="border-b border-border/30 hover:bg-secondary/30 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                              <span className="text-primary-foreground font-semibold text-sm">
                                {member.name.split(" ").map(n => n[0]).join("")}
                              </span>
                            </div>
                            <span className="font-medium">{member.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-muted-foreground font-mono text-sm">{member.id}</td>
                        <td className="py-4 px-4 font-semibold text-primary">{member.investment}</td>
                        <td className="py-4 px-4 text-muted-foreground">{member.joined}</td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            member.status === "Active"
                              ? "bg-green-500/20 text-green-500"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {member.status}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
