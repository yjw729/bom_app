

export const Sidebar = ({ activePath, setActivePath } : { activePath: string, setActivePath: (path: string) => void }) => {
  const navItems = [
    { 
      name: '1. Define Cut of Style', 
      description: 'Specify construction details and fit.',
      href: '/cut-style' 
    },
    { 
      name: '2. Define Components', 
      description: 'Select all necessary materials, trims, and parts.',
      href: '/definenode' 
    },
    { 
      name: '3. Define Cost', 
      description: 'Aggregate material costs, labor, and overhead.',
      href: '/costing' 
    },
  ];

  return (
    <aside className="w-80 bg-gray-900 text-white min-h-screen p-6 sticky top-0 shadow-2xl hidden md:block border-r border-gray-700">
      
      {/* Header/Branding Area */}
      <div className="text-3xl font-extrabold mb-8 text-green-400 border-b border-gray-700 pb-4">
        Product Workflow
      </div>
      
      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-3">
          {navItems.map((item) => {
            const isActive = item.href === activePath;
            return (
              <li key={item.name} className="group">
                <button 
                  onClick={() => setActivePath(item.href)}
                  // Use Tailwind classes to highlight the active link
                  className={`block w-full text-left p-4 rounded-xl transition duration-300 shadow-md
                             ${isActive 
                               ? 'bg-green-600 text-white shadow-green-700/50' 
                               : 'bg-gray-800 hover:bg-gray-700 text-green-300'
                             }`}
                >
                  <p className="text-xl font-semibold mb-1">{item.name}</p>
                  <p className={`text-sm font-light ${isActive ? 'text-green-100' : 'text-gray-400'}`}>
                    {item.description}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Status Area */}
      <div className="absolute bottom-6 left-6 right-6 border-t border-gray-700 pt-4">
        <div className="text-sm text-gray-500">
            Current User: Manufacturing Lead
        </div>
      </div>
    </aside>
  );
};