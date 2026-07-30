import DashboardCard from "./DashboardCard";
import {
  Image,
  FolderTree,
  Package,
  ShoppingCart,
} from "lucide-react";

export default function StatsGrid() {
  return (
    <div className="grid text-black gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <DashboardCard
        title="Hero Sections"
        value="1"
        icon={<Image size={30} />}
      />

      <DashboardCard
        title="Categories"
        value="0"
        icon={<FolderTree size={30} />}
      />

      <DashboardCard
        title="Products"
        value="0"
        icon={<Package size={30} />}
      />

      <DashboardCard
        title="Orders"
        value="0"
        icon={<ShoppingCart size={30} />}
      />
    </div>
  );
}