
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

const CompoundInterestCalculator = () => {
  const [initialAmount, setInitialAmount] = useState<number>(1);
  const [days, setDays] = useState<number>(30);
  const [useInterestRate, setUseInterestRate] = useState<boolean>(false);
  const [interestRate, setInterestRate] = useState<number>(5);
  const [finalAmount, setFinalAmount] = useState<number>(0);

  useEffect(() => {
    let calculated = initialAmount;
    
    // Each day doubles the previous day's amount
    for (let i = 1; i <= days; i++) {
      calculated *= 2;
    }
    
    // If interest rate is enabled, add it on top (monthly rate)
    if (useInterestRate) {
      const monthlyRate = interestRate / 100;
      const months = days / 30; // Approximate months
      calculated = calculated * Math.pow(1 + monthlyRate, months);
    }
    
    setFinalAmount(calculated);
  }, [initialAmount, days, interestRate, useInterestRate]);

  const handleInitialAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setInitialAmount(isNaN(value) ? 0 : value);
  };

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setDays(isNaN(value) ? 0 : value);
  };

  const handleSliderChange = (value: number[]) => {
    setInterestRate(value[0]);
  };

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString('vi-VN');
  };

  // Function to convert large numbers to readable text
  const formatReadableNumber = (num: number): string => {
    if (num < 1000) return `${num.toFixed(2)}`;
    if (num < 1000000) return `${(num / 1000).toFixed(2)} nghìn`;
    if (num < 1000000000) return `${(num / 1000000).toFixed(2)} triệu`;
    if (num < 1000000000000) return `${(num / 1000000000).toFixed(2)} tỷ`;
    if (num < 1000000000000000) return `${(num / 1000000000000).toFixed(2)} nghìn tỷ`;
    if (num < 1000000000000000000) return `${(num / 1000000000000000).toFixed(2)} triệu tỷ`;
    return `${(num / 1000000000000000000).toFixed(2)} tỷ tỷ`;
  };

  return (
    <div className="w-full p-4 rounded-lg bg-white">
      <div className="flex items-center gap-2 mb-4">
        <Calculator size={24} className="text-edu-green" />
        <h3 className="text-xl font-bold text-edu-green">Gấp Đôi Mỗi Ngày</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="initialAmount">Số tiền ban đầu (ngày 1):</Label>
          <Input
            id="initialAmount"
            type="number"
            min="1"
            value={initialAmount}
            onChange={handleInitialAmountChange}
            className="mt-1 bg-gray-50 border-edu-green"
          />
        </div>
        
        <div>
          <Label htmlFor="days">Số ngày gấp đôi:</Label>
          <Input
            id="days"
            type="number"
            min="1"
            max="100"
            value={days}
            onChange={handleDaysChange}
            className="mt-1 bg-gray-50 border-edu-green"
          />
        </div>
        
        <div className="flex items-center space-x-2 mb-2">
          <Switch
            id="use-interest"
            checked={useInterestRate}
            onCheckedChange={setUseInterestRate}
          />
          <Label htmlFor="use-interest">Thêm lãi suất hàng tháng</Label>
        </div>
        
        {useInterestRate && (
          <div>
            <div className="flex justify-between">
              <Label htmlFor="interestRate">Lãi suất hàng tháng: {interestRate}%</Label>
            </div>
            <Slider
              defaultValue={[5]}
              max={20}
              min={1}
              step={1}
              onValueChange={handleSliderChange}
              className="mt-2"
            />
          </div>
        )}
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-500 mb-2">Số tiền sau {days} ngày gấp đôi:</p>
          <p className="text-2xl font-bold text-edu-green">{formatNumber(finalAmount)}</p>
          <p className="text-sm text-gray-600">({formatReadableNumber(finalAmount)})</p>
          
          <div className="mt-4 text-sm">
            <p className="font-medium text-gray-700">Tăng:</p>
            <p className="font-bold text-edu-red">{formatNumber(finalAmount - initialAmount)}</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(finalAmount - initialAmount)})</p>
            <p className="font-medium text-gray-700 mt-2">Gấp số tiền ban đầu:</p>
            <p className="font-bold text-edu-purple">{(finalAmount / initialAmount).toFixed(2)} lần</p>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mt-4">
          <p>Mỗi ngày số tiền được gấp đôi so với ngày trước: Số tiền cuối = Số tiền đầu × 2^Số ngày</p>
          {useInterestRate && <p className="mt-1">Kèm theo lãi suất hàng tháng: {interestRate}%</p>}
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
