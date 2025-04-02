
import React, { useState, useEffect } from "react";
import { calculateRiceGrains, grainsToTons, vietnamRicePercentage } from "@/utils/calculators";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

const RiceCalculator = () => {
  const [squares, setSquares] = useState<number>(1);
  const [grains, setGrains] = useState<number>(0);
  const [tons, setTons] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    const validSquares = Math.min(Math.max(1, squares), 64);
    const calculatedGrains = calculateRiceGrains(validSquares);
    const calculatedTons = grainsToTons(calculatedGrains);
    const calculatedPercentage = vietnamRicePercentage(calculatedTons);

    setGrains(calculatedGrains);
    setTons(calculatedTons);
    setPercentage(calculatedPercentage);
  }, [squares]);

  const handleSquaresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSquares(isNaN(value) ? 1 : value);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1e12) {
      return num.toExponential(2);
    }
    return num.toLocaleString();
  };

  return (
    <div className="w-full p-4 rounded-lg bg-white">
      <div className="flex items-center gap-2 mb-4">
        <Calculator size={24} className="text-edu-blue" />
        <h3 className="text-xl font-bold text-edu-blue">Tính Số Hạt Thóc</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="squares">Số ô bàn cờ (1-64):</Label>
          <Input
            id="squares"
            type="number"
            min="1"
            max="64"
            value={squares}
            onChange={handleSquaresChange}
            className="mt-1 bg-gray-50 border-edu-blue"
          />
        </div>
        
        <div className="grid gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Tổng số hạt thóc:</p>
            <p className="text-lg font-bold text-edu-red">{formatNumber(grains)} hạt</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Quy đổi thành:</p>
            <p className="text-lg font-bold text-edu-green">{tons.toFixed(6)} tấn</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Phần trăm sản lượng lúa của Việt Nam trong 1 năm:</p>
            <p className="text-lg font-bold text-edu-purple">
              {percentage < 0.000001 
                ? percentage.toExponential(2) 
                : percentage.toFixed(6)}%
            </p>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mt-4">
          <p>Mỗi ô sau sẽ có số hạt thóc gấp đôi ô trước, bắt đầu từ 1 hạt ở ô đầu tiên.</p>
        </div>
      </div>
    </div>
  );
};

export default RiceCalculator;
