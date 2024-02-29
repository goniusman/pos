import { Card, CardHeader } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export function DashboardCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color?: string;
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-center items-center">
          <BarChart3 className={`h-10 w-10 text-${color}`} />
          <div className="ml-5">
            <p>{value}</p>
            <p className={`font-bold text-${color}`}>{title}</p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
