import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

export default function DashboardCard({
  title,
  value,
  icon,
}: DashboardCardProps) {
  return (
    <div className="rounded-xl text-black bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className="rounded-full bg-cyan-100 p-4 text-cyan-600">
          {icon}
        </div>
      </div>
    </div>
  );
}