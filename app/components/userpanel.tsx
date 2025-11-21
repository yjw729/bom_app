export const UserPanel = () => {
  // Mock data for the user profile
  const user = {
    name: "Alex Johnson",
    role: "Workflow Manager",
    email: "alex.j@biz.com",
    projectStatus: "Style Definition in Progress",
  };

  return (
    <aside className="w-64 bg-white min-h-screen p-6 sticky top-0 shadow-xl hidden lg:block border-l border-gray-200">
      <div className="flex flex-col items-center border-b pb-6 mb-6">
        <div className="h-16 w-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-3 shadow-md">
          AJ
        </div>
        <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.role}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-2">Project Info</h3>
        
        <div>
          <p className="text-sm font-medium text-gray-500">Project Status</p>
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mt-1">
            {user.projectStatus}
          </span>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Created By</p>
          <p className="text-sm text-gray-800 mt-1">{user.role}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Contact</p>
          <p className="text-sm text-gray-800 mt-1">{user.email}</p>
        </div>
      </div>
    </aside>
  );
};