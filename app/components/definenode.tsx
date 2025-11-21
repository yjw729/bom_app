import React, { useState } from 'react';

export const DefineNode = ({ onSave } : { onSave: (path: string) => void }) => {
  // 定义可供选择的组件列表
  const componentOptions: string[] = ['Main Fabric', 'Zipper', 'Thread', 'Label', 'Interlining', 'Button', 'Snaps'];
  const [selectedComponents, setSelectedComponents] = useState<string[]>(['Main Fabric']); // 默认选中 Main Fabric
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const toggleComponent = (component: string) => {
    setSelectedComponents(prev => 
      prev.includes(component)
        ? prev.filter(c => c !== component) // 移除
        : [...prev, component] // 添加
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedComponents.length === 0) {
        setSaveStatus('Please select at least one component.');
        return;
    }

    // 模拟保存数据 
    console.log('Components Defined:', selectedComponents);
    setSaveStatus(`Successfully defined ${selectedComponents.length} components.`);
    
    // 模拟导航到下一步
    setTimeout(() => {
      onSave('/costing'); 
    }, 1000);
  };

  // 根据当前保存状态决定按钮文本和是否启用
  const buttonText = selectedComponents.length > 0 
    ? `Save ${selectedComponents.length} Components & Proceed to Step 3` 
    : 'Select Components';

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl min-h-full border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-4 text-orange-700">
        2. Define Components
      </h1>
      
      <p className="text-lg text-gray-600 mb-8">
        Select all necessary materials, trims, and parts required for manufacturing this style.
      </p>

      {saveStatus && (
        <div className={`p-3 mb-4 rounded-lg ${
            selectedComponents.length > 0 ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'
        }`}>
          {saveStatus} {selectedComponents.length > 0 && 'Proceeding to Step 3...'}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {componentOptions.map((component) => {
            const isSelected = selectedComponents.includes(component);
            return (
              <div 
                key={component} 
                className={`p-4 border rounded-xl cursor-pointer transition duration-150 ease-in-out flex items-center justify-between ${
                  isSelected 
                    ? 'border-orange-500 ring-2 ring-orange-500 bg-orange-50' 
                    : 'border-gray-200 hover:border-orange-400 hover:bg-gray-50'
                }`}
                onClick={() => toggleComponent(component)}
              >
                <span className="text-lg font-medium text-gray-800">{component}</span>
                <input
                  type="checkbox"
                  name="componentSelection"
                  checked={isSelected}
                  onChange={() => toggleComponent(component)}
                  className="h-5 w-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
                />
              </div>
            );
          })}
        </div>

        <button 
          type="submit" 
          disabled={!selectedComponents.length || !!saveStatus}
          className={`w-full py-3 px-4 text-white font-bold rounded-xl transition duration-200 ease-in-out shadow-lg 
            ${selectedComponents.length && !saveStatus
              ? 'bg-orange-600 hover:bg-orange-700 transform hover:scale-[1.005]' 
              : 'bg-gray-400 cursor-not-allowed'
            }`}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};