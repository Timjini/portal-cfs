import { UsersIcon } from "lucide-react";
import { DashboardLayout } from "../DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row min-h-screen">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
        <UsersIcon />
      </h1>
      <p className="text-gray-600 mt-1">Stay connected with your athlete's journey</p>
    </div>
    <div className="mt-4 md:mt-0">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
        <span className="material-symbols-outlined">notifications</span>
        Notification Center
      </button>
    </div>
  </div>
  </div>
    </DashboardLayout>
  );
}
