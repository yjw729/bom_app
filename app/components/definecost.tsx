import React, { useState } from 'react';

import {CostInput} from "./costinput"


export const DefineCost = () => {
    // 使用 '' 作为初始值以允许输入字段为空
    const [materialCost, setMaterialCost] = useState<number | ''>(10.00);
    const [laborCost, setLaborCost] = useState<number | ''>(5.50);
    const [overheadCost, setOverheadCost] = useState<number | ''>(2.50);
    
    const [finalCost, setFinalCost] = useState<number | null>(null);
    const [saveStatus, setSaveStatus] = useState<string | null>(null);

    // 计算总成本
    const calculateTotalCost = (): number => {
        const mat = typeof materialCost === 'number' ? materialCost : 0;
        const lab = typeof laborCost === 'number' ? laborCost : 0;
        const ovh = typeof overheadCost === 'number' ? overheadCost : 0;
        return mat + lab + ovh;
    };

    const totalCost = calculateTotalCost();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (totalCost <= 0) {
            setSaveStatus('The total cost must be greater than $0.00 to complete the workflow.');
            setFinalCost(null);
            return;
        }

        // 模拟保存和完成流程
        setFinalCost(totalCost);
        setSaveStatus(`Workflow Complete! Final Estimated Style Cost is $${totalCost.toFixed(2)}.`);
        console.log('Final Cost Defined:', totalCost);
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl min-h-full border border-gray-200">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-4 text-red-700">
                3. Define Cost
            </h1>
            <p className="text-lg text-gray-600 mb-8">
                Aggregate material costs, labor, and overhead to produce the final estimated Style cost.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <CostInput 
                        label="Material Cost (材料成本)" 
                        value={materialCost} 
                        onChange={setMaterialCost} 
                        color="text-red-600"
                    />
                    <CostInput 
                        label="Labor Cost (人工成本)" 
                        value={laborCost} 
                        onChange={setLaborCost} 
                        color="text-red-600"
                    />
                    <CostInput 
                        label="Overhead (管理费用)" 
                        value={overheadCost} 
                        onChange={setOverheadCost} 
                        color="text-red-600"
                    />
                </div>

                {/* Total Cost Display */}
                <div className="p-5 mt-8 bg-red-50 border-t-4 border-red-500 rounded-xl shadow-lg flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">
                        Estimated Total Style Cost (预估总成本)
                    </span>
                    <span className="text-4xl font-extrabold text-red-700 font-mono">
                        ${totalCost.toFixed(2)}
                    </span>
                </div>

                {saveStatus && (
                    <div className={`p-4 mt-6 rounded-lg font-semibold text-lg ${
                        finalCost ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'
                    }`}>
                        {saveStatus}
                    </div>
                )}

                <button 
                    type="submit" 
                    disabled={totalCost <= 0 || !!finalCost}
                    className={`w-full py-3 px-4 text-white font-bold rounded-xl transition duration-200 ease-in-out shadow-lg 
                        ${totalCost > 0 && !finalCost
                          ? 'bg-red-600 hover:bg-red-700 transform hover:scale-[1.005]' 
                          : 'bg-gray-400 cursor-not-allowed'
                        }`}
                >
                    {finalCost ? 'Workflow Completed' : 'Calculate & Finalize Cost'}
                </button>
            </form>
        </div>
    );
};