export const CostInput = ({ label, value, onChange, color }: { 
    label: string, 
    value: number | '', 
    onChange: (value: number | '') => void, 
    color: string 
}) => (
    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-inner border border-gray-200">
        <label htmlFor={label} className="text-lg font-medium text-gray-700 w-1/2">
            {label}
        </label>
        <div className="relative rounded-md shadow-sm w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className={`text-xl font-bold ${color}`}>$</span>
            </div>
            <input
                type="number"
                id={label}
                name={label}
                value={value}
                onChange={(e) => {
                    // 允许空字符串，或解析为数字
                    const val = e.target.value;
                    onChange(val === '' ? '' : parseFloat(val));
                }}
                min="0"
                step="0.01"
                placeholder="0.00"
                className="focus:ring-red-500 focus:border-red-500 block w-full pl-8 pr-3 py-2 border-gray-300 rounded-lg text-xl font-mono text-right"
            />
        </div>
    </div>
);