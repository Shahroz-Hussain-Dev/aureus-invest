import { motion } from "framer-motion";
import { Layers, Lock, Unlock, Users, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";

const levels = [
  { level: 1, percentage: 25, earned: "$625.00", members: 12, unlocked: true },
  { level: 2, percentage: 15, earned: "$375.00", members: 28, unlocked: true },
  { level: 3, percentage: 7, earned: "$175.00", members: 56, unlocked: true },
  { level: 4, percentage: 4, earned: "$100.00", members: 89, unlocked: true },
  { level: 5, percentage: 3, earned: "$75.00", members: 134, unlocked: true },
  { level: 6, percentage: 2.5, earned: "$62.50", members: 201, unlocked: true },
  { level: 7, percentage: 2, earned: "$50.00", members: 298, unlocked: true },
  { level: 8, percentage: 1.5, earned: "$37.50", members: 412, unlocked: true },
  { level: 9, percentage: 1, earned: "$25.00", members: 567, unlocked: true },
  { level: 10, percentage: 1, earned: "$25.00", members: 789, unlocked: true },
];

export default function LevelsPage() {
  const directReferrals = 12;
  const requiredReferrals = 10;
  const allUnlocked = directReferrals >= requiredReferrals;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Stats */}
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
                  <div className="text-3xl font-display font-bold">{directReferrals}</div>
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
                  <Layers className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold">10/10</div>
                  <div className="text-muted-foreground">Levels Unlocked</div>
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
                  <Star className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">$1,550.00</div>
                  <div className="text-muted-foreground">Total Level Earnings</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Unlock Requirement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`p-6 rounded-xl ${
            allUnlocked
              ? "bg-green-500/10 border border-green-500/20"
              : "bg-primary/10 border border-primary/20"
          }`}
        >
          <div className="flex items-center gap-4">
            {allUnlocked ? (
              <Unlock className="w-8 h-8 text-green-500" />
            ) : (
              <Lock className="w-8 h-8 text-primary" />
            )}
            <div>
              <h3 className="font-display font-bold text-lg">
                {allUnlocked ? "All Levels Unlocked!" : "Unlock All Levels"}
              </h3>
              <p className="text-muted-foreground">
                {allUnlocked
                  ? "Congratulations! You have unlocked all 10 profit sharing levels."
                  : `You need ${requiredReferrals - directReferrals} more direct referrals to unlock all levels.`}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Levels Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card variant="premium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                Profit Share Levels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {levels.map((level, i) => (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-5 rounded-xl border transition-all cursor-pointer ${
                      level.unlocked
                        ? "bg-secondary/30 border-primary/20 hover:border-primary/40"
                        : "bg-secondary/10 border-border/30 opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          level.unlocked ? "bg-primary/20" : "bg-secondary/50"
                        }`}>
                          <span className={`text-xl font-display font-bold ${
                            level.unlocked ? "text-primary" : "text-muted-foreground"
                          }`}>
                            L{level.level}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold">Level {level.level}</div>
                          <div className="text-sm text-muted-foreground">{level.members} members</div>
                        </div>
                      </div>
                      {level.unlocked ? (
                        <Unlock className="w-5 h-5 text-green-500" />
                      ) : (
                        <Lock className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Commission Rate</div>
                        <div className="text-2xl font-display font-bold text-primary">{level.percentage}%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Earned</div>
                        <div className="text-xl font-semibold text-green-500">{level.earned}</div>
                      </div>
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
