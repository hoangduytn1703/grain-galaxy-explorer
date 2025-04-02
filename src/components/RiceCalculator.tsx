
import React, { useState, useEffect } from "react";
import { calculateRiceGrains, grainsToTons, vietnamRicePercentage } from "@/utils/calculators";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const RiceCalculator = () => {
  const [squares, setSquares] = useState<string>("1");
  const [error, setError] = useState<string>("");
  const [grains, setGrains] = useState<number>(0);
  const [tons, setTons] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    if (squares === "") {
      setError("Vui lòng nhập số ô bàn cờ");
      return;
    }

    const squaresNumber = parseInt(squares);
    if (isNaN(squaresNumber)) {
      setError("Giá trị không hợp lệ");
      return;
    }

    if (squaresNumber < 1 || squaresNumber > 64) {
      setError("Số ô phải từ 1 đến 64");
      return;
    }

    setError("");
    const calculatedGrains = calculateRiceGrains(squaresNumber);
    const calculatedTons = grainsToTons(calculatedGrains);
    const calculatedPercentage = vietnamRicePercentage(calculatedTons);

    setGrains(calculatedGrains);
    setTons(calculatedTons);
    setPercentage(calculatedPercentage);
  }, [squares]);

  const handleSquaresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSquares(e.target.value);
  };

  // Function to convert large numbers to readable text
  const formatReadableNumber = (num: number): string => {
    if (num < 1000) return `${num}`;
    if (num < 1000000) return `${(num / 1000).toFixed(2)} nghìn`;
    if (num < 1000000000) return `${(num / 1000000).toFixed(2)} triệu`;
    if (num < 1000000000000) return `${(num / 1000000000).toFixed(2)} tỷ`;
    if (num < 1000000000000000) return `${(num / 1000000000000).toFixed(2)} nghìn tỷ`;
    if (num < 1000000000000000000) return `${(num / 1000000000000000).toFixed(2)} triệu tỷ`;
    return `${(num / 1000000000000000000).toFixed(2)} tỷ tỷ`;
  };

  const formatNumber = (num: number): string => {
    return num.toLocaleString('vi-VN');
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
          {error && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
        
        <div className="grid gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Tổng số hạt thóc:</p>
            <p className="text-lg font-bold text-edu-red">{formatNumber(grains)} hạt</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(grains)})</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Quy đổi thành:</p>
            <p className="text-lg font-bold text-edu-green">{formatNumber(tons)} tấn</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(tons)} tấn)</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Phần trăm sản lượng lúa của Việt Nam trong 1 năm:</p>
            <p className="text-lg font-bold text-edu-purple">
              {formatNumber(percentage)}%
            </p>
            <p className="text-sm text-gray-600">
              ({formatReadableNumber(percentage)}%)
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
