export default function RecentActivity() {
  return (
    <div className="rounded-xl text-black bg-white border border-slate-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">
        Recent Activity
      </h2>

      <div className="space-y-4">
        <div className="border-b pb-3">
          <p className="font-medium">
            Welcome to your Admin Panel 🎉
          </p>

          <p className="text-sm text-slate-500">
            Your dashboard is ready to manage website content.
          </p>
        </div>

        <div className="border-b pb-3">
          <p className="font-medium">
            Hero module is ready to build.
          </p>

          <p className="text-sm text-slate-500">
            Next step is creating CRUD functionality.
          </p>
        </div>

        <div>
          <p className="font-medium">
            MongoDB connection established successfully.
          </p>

          <p className="text-sm text-slate-500">
            You can now manage your data.
          </p>
        </div>
      </div>
    </div>
  );
}