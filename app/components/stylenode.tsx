import React, { useState } from 'react';

export const StyleNode = ({ onSave } : { onSave: (path: string) => void }) => {
  const [selectedCut, setSelectedCut] = useState('');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const cuts = [
    { label: 'Slim Fit', description: 'A tailored cut, close to the body, emphasizing shape.' },
    { label: 'Woven Fabric', description: 'Style defined by its material structure (e.g., twill or plain weave).' },
    { label: 'Seamless Construction', description: 'Style built without traditional seams, often using bonding or knitting.' },
  ];

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedCut) return;

    // Simulate saving data 
    console.log('Style Cut Defined:', selectedCut);
    setSaveStatus(`Successfully saved: ${selectedCut}.`);
    
    // Simulate navigation to the next step
    setTimeout(() => {
      onSave('/definenode'); 
    }, 1000);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl min-h-full border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-4 text-green-700">
        1. Define Cut of Style
      </h1>
      
      <p className="text-lg text-gray-600 mb-8">
        Please select the primary construction detail and fit for this new style from the options below.
      </p>

      {saveStatus && (
        <div className="p-3 mb-4 bg-green-100 text-green-700 border border-green-300 rounded-lg">
          {saveStatus} Proceeding to Step 2...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {cuts.map((cut) => (
            <div 
              key={cut.label} 
              className={`p-4 border rounded-xl cursor-pointer transition duration-150 ease-in-out ${
                selectedCut === cut.label 
                  ? 'border-green-500 ring-2 ring-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-green-400 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedCut(cut.label)}
            >
              <label className="flex items-start cursor-pointer">
                <input
                  type="radio"
                  name="styleCut"
                  value={cut.label}
                  checked={selectedCut === cut.label}
                  onChange={() => setSelectedCut(cut.label)}
                  className="mt-1 h-5 w-5 text-green-600 border-gray-300 focus:ring-green-500"
                />
                <div className="ml-4">
                  <span className="block text-xl font-semibold text-gray-800">{cut.label}</span>
                  <p className="text-sm text-gray-500 mt-1">{cut.description}</p>
                </div>
              </label>
            </div>
          ))}
        </div>

        <button 
          type="submit" 
          disabled={!selectedCut || !!saveStatus}
          className={`w-full py-3 px-4 text-white font-bold rounded-xl transition duration-200 ease-in-out shadow-lg 
            ${selectedCut && !saveStatus
              ? 'bg-green-600 hover:bg-green-700 transform hover:scale-[1.005]' 
              : 'bg-gray-400 cursor-not-allowed'
            }`}
        >
          {selectedCut ? 'Save & Proceed to Step 2 (Components)' : 'Select a Style Cut to Save'}
        </button>
      </form>
    </div>
  );
};
