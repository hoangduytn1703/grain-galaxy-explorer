
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CompoundInterestCalculator = () => {
  const [initialAmount, setInitialAmount] = useState<number>(1000);
  const [days, setDays] = useState<number>(10);
  const [growthType, setGrowthType] = useState<"exponential" | "arithmetic">("exponential");
  const [useInterestRate, setUseInterestRate] = useState<boolean>(false);
  const [interestRate, setInterestRate] = useState<number>(5);
  const [finalAmount, setFinalAmount] = useState<number>(0);
  const [dailyAmounts, setDailyAmounts] = useState<number[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (initialAmount < 500) {
      setError("Số tiền ban đầu phải từ 500 đồng trở lên");
      return;
    } else {
      setError("");
    }

    let calculated = initialAmount;
    const dailyValues = [initialAmount];
    
    // Calculate daily progression
    for (let i = 1; i <= days; i++) {
      if (growthType === "exponential") {
        // Each day doubles the previous day's amount (x2)
        calculated *= 2;
      } else {
        // Each day adds the initial amount to the previous day's amount (+initial)
        calculated += initialAmount;
      }
      dailyValues.push(calculated);
    }
    
    // If interest rate is enabled, add it on top (monthly rate)
    if (useInterestRate) {
      const monthlyRate = interestRate / 100;
      const months = days / 30; // Approximate months
      calculated = calculated * Math.pow(1 + monthlyRate, months);
    }
    
    setFinalAmount(calculated);
    setDailyAmounts(dailyValues);
  }, [initialAmount, days, interestRate, useInterestRate, growthType]);

  const handleInitialAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setInitialAmount(isNaN(value) ? 0 : value);
  };

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setDays(isNaN(value) ? 0 : Math.min(value, 30)); // Limit to 30 days to prevent overflow
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
        <h3 className="text-xl font-bold text-edu-green">Tiền Tăng Theo Ngày</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="initialAmount">Số tiền ban đầu (ngày 1):</Label>
          <Input
            id="initialAmount"
            type="number"
            min="500"
            value={initialAmount}
            onChange={handleInitialAmountChange}
            className="mt-1 bg-gray-50 border-edu-green"
          />
          {error && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
        
        <div>
          <Label htmlFor="days">Số ngày tăng tiền:</Label>
          <Input
            id="days"
            type="number"
            min="1"
            max="30"
            value={days}
            onChange={handleDaysChange}
            className="mt-1 bg-gray-50 border-edu-green"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2 border rounded-md p-2">
            <input
              type="radio"
              id="exponential"
              name="growthType"
              checked={growthType === "exponential"}
              onChange={() => setGrowthType("exponential")}
              className="text-edu-green"
            />
            <Label htmlFor="exponential">Cấp số nhân (×2)</Label>
          </div>
          
          <div className="flex items-center space-x-2 border rounded-md p-2">
            <input
              type="radio"
              id="arithmetic"
              name="growthType"
              checked={growthType === "arithmetic"}
              onChange={() => setGrowthType("arithmetic")}
              className="text-edu-green"
            />
            <Label htmlFor="arithmetic">Cấp số cộng (+{formatNumber(initialAmount)})</Label>
          </div>
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
          <p className="text-sm font-medium text-gray-500 mb-2">Số tiền sau {days} ngày tăng tiền:</p>
          <p className="text-2xl font-bold text-edu-green">{formatNumber(finalAmount)}</p>
          <p className="text-sm text-gray-600">({formatReadableNumber(finalAmount)})</p>
          
          <div className="mt-4 text-sm">
            <p className="font-medium text-gray-700">Tăng:</p>
            <p className="font-bold text-edu-red">{formatNumber(finalAmount - initialAmount)}</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(finalAmount - initialAmount)})</p>
            <p className="font-medium text-gray-700 mt-2">Gấp số tiền ban đầu:</p>
            <p className="font-bold text-edu-purple">{(finalAmount / initialAmount).toFixed(2)} lần</p>
          </div>
          
          {days <= 10 && (
            <div className="mt-4 text-sm">
              <p className="font-medium text-gray-700">Chi tiết từng ngày:</p>
              <div className="mt-2 space-y-1 max-h-40 overflow-y-auto">
                {dailyAmounts.map((amount, index) => (
                  <div key={index} className="flex justify-between">
                    <span>Ngày {index}:</span>
                    <span className="font-medium">{formatNumber(amount)} đ</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="text-sm text-gray-500 mt-4">
          {growthType === "exponential" ? (
            <p>Mỗi ngày số tiền được gấp đôi so với ngày trước: Số tiền cuối = Số tiền đầu × 2^Số ngày</p>
          ) : (
            <p>Mỗi ngày cộng thêm số tiền ban đầu: Số tiền cuối = Số tiền đầu × (Số ngày + 1)</p>
          )}
          {useInterestRate && <p className="mt-1">Kèm theo lãi suất hàng tháng: {interestRate}%</p>}
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
