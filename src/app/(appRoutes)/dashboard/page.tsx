import { DashboardCard } from "@/components/DashboardCard";
import { DashboardTabs } from "@/components/DashboardTabs";

export default function Dashboard() {
  return (
    <main className="md:p-5">
      <section className=" grid md:grid-cols-4 gap-5">
        <DashboardCard title="Revenue" value="3.50" color="red-600" />
        <DashboardCard title="Sale Return" value="0.00" color="green-600" />
        <DashboardCard
          title="Purchase Return"
          value="35.65"
          color="orange-600"
        />
        <DashboardCard title="Profit" value="3.65" color="lime-600" />
      </section>
      <section className="my-10">
        <DashboardTabs />
      </section>
    </main>
  );
}
