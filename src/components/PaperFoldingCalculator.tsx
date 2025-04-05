
import React, { useState, useEffect } from "react";
import {
  calculateFoldedThickness,
  thicknessToKilometers,
  thicknessToLightTime,
  thicknessToLightDays,
  thicknessToEverestHeight,
  thicknessToEarthToMoonDistance,
  thicknessToSolarSystemDistance,
  thicknessToMilkyWayDiameter,
  thicknessToObservableUniverse
} from "@/utils/calculators";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, BookMarked } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const PaperFoldingCalculator = () => {
  const [paperThickness, setPaperThickness] = useState<number>(0.1); // Standard paper thickness in mm
  const [folds, setFolds] = useState<number>(0);
  const [resultThickness, setResultThickness] = useState<number>(0);
  const [thicknessInKm, setThicknessInKm] = useState<number>(0);
  const [lightTimeSeconds, setLightTimeSeconds] = useState<number>(0);
  const [lightTimeDays, setLightTimeDays] = useState<number>(0);
  const [everestHeights, setEverestHeights] = useState<number>(0);
  const [moonDistances, setMoonDistances] = useState<number>(0);
  const [solarSystemPortion, setSolarSystemPortion] = useState<number>(0);
  const [milkyWayPortion, setMilkyWayPortion] = useState<number>(0);
  const [universePortion, setUniversePortion] = useState<number>(0);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (folds < 0) {
      setError("Số lần gấp không thể âm");
      return;
    }

    if (folds > 1000) {
      setError("Số lần gấp không thể vượt quá 1000");
      return;
    }

    if (paperThickness <= 0) {
      setError("Độ dày giấy phải lớn hơn 0");
      return;
    }

    setError("");
    
    const thickness = calculateFoldedThickness(paperThickness, folds);
    const kmThickness = thicknessToKilometers(thickness);
    const seconds = thicknessToLightTime(kmThickness);
    const days = thicknessToLightDays(seconds);
    const everest = thicknessToEverestHeight(thickness);
    const moon = thicknessToEarthToMoonDistance(thickness);
    const solarSystem = thicknessToSolarSystemDistance(thickness);
    const milkyWay = thicknessToMilkyWayDiameter(thickness);
    const universe = thicknessToObservableUniverse(thickness);

    setResultThickness(thickness);
    setThicknessInKm(kmThickness);
    setLightTimeSeconds(seconds);
    setLightTimeDays(days);
    setEverestHeights(everest);
    setMoonDistances(moon);
    setSolarSystemPortion(solarSystem);
    setMilkyWayPortion(milkyWay);
    setUniversePortion(universe);
  }, [paperThickness, folds]);

  const handlePaperThicknessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setPaperThickness(isNaN(value) ? 0 : value);
  };

  const handleFoldsChange = (value: number[]) => {
    setFolds(value[0]);
  };

  // Format number with commas
  const formatNumber = (num: number): string => {
    if (num === undefined || num === null) return "0";
    if (isNaN(num)) return "0";
    return num.toLocaleString('vi-VN', { maximumFractionDigits: 6 });
  };

  // Function to convert large numbers to readable text
  const formatReadableNumber = (num: number): string => {
    if (num === undefined || num === null) return "0";
    if (isNaN(num)) return "0";
    if (num < 1000) return `${num.toFixed(2)}`;
    if (num < 1000000) return `${(num / 1000).toFixed(2)} nghìn`;
    if (num < 1000000000) return `${(num / 1000000).toFixed(2)} triệu`;
    if (num < 1000000000000) return `${(num / 1000000000).toFixed(2)} tỷ`;
    if (num < 1000000000000000) return `${(num / 1000000000000).toFixed(2)} nghìn tỷ`;
    if (num < 1000000000000000000) return `${(num / 1000000000000000).toFixed(2)} triệu tỷ`;
    return `${(num / 1000000000000000000).toFixed(2)} tỷ tỷ`;
  };

  // Function to format exponential numbers
  const formatExponential = (num: number): string => {
    if (num === undefined || num === null) return "0";
    if (isNaN(num)) return "0";
    if (num < 1000000) return formatNumber(num);
    return num.toExponential(2);
  };

  return (
    <div className="w-full p-4 rounded-lg bg-white">
      <div className="flex items-center gap-2 mb-4">
        <BookMarked size={24} className="text-edu-orange" />
        <h3 className="text-xl font-bold text-edu-orange">Khám Phá Độ Dày Của Giấy Gấp</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="paperThickness">Độ dày ban đầu của giấy (mm):</Label>
          <Input
            id="paperThickness"
            type="number"
            min="0.01"
            step="0.01"
            value={paperThickness}
            onChange={handlePaperThicknessChange}
            className="mt-1 bg-gray-50 border-edu-orange"
          />
        </div>
        
        <div>
          <div className="flex justify-between">
            <Label htmlFor="folds">Số lần gấp đôi: {folds}</Label>
          </div>
          <Slider
            id="folds"
            min={0}
            max={100}
            step={1}
            value={[folds]}
            onValueChange={handleFoldsChange}
            className="mt-2"
          />
          <div className="text-xs text-gray-500 mt-1">
            <span className="inline-block w-1/4 text-left">0</span>
            <span className="inline-block w-2/4 text-center">50</span>
            <span className="inline-block w-1/4 text-right">100</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Label htmlFor="foldsInput" className="whitespace-nowrap">Nhập số lần gấp chính xác:</Label>
          <Input
            id="foldsInput"
            type="number"
            min="0"
            max="1000"
            value={folds}
            onChange={(e) => setFolds(parseInt(e.target.value) || 0)}
            className="bg-gray-50 border-edu-orange"
          />
        </div>
        
        {error && (
          <Alert variant="destructive" className="mt-2">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <div className="grid gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Độ dày sau khi gấp:</p>
            <p className="text-lg font-bold text-edu-orange">{formatExponential(resultThickness)} mm</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(resultThickness)} mm)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Quy đổi thành km:</p>
            <p className="text-lg font-bold text-edu-blue">{formatExponential(thicknessInKm)} km</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(thicknessInKm)} km)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Thời gian ánh sáng di chuyển:</p>
            <p className="text-lg font-bold text-edu-purple">{formatExponential(lightTimeSeconds)} giây</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(lightTimeSeconds)} giây)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Thời gian ánh sáng di chuyển (ngày):</p>
            <p className="text-lg font-bold text-edu-red">{formatExponential(lightTimeDays)} ngày</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(lightTimeDays)} ngày)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Số lần cao hơn đỉnh Everest:</p>
            <p className="text-lg font-bold text-edu-green">{formatExponential(everestHeights)} lần</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(everestHeights)} lần)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">So với khoảng cách Trái Đất - Mặt Trăng:</p>
            <p className="text-lg font-bold text-edu-yellow">{formatExponential(moonDistances)} lần</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(moonDistances)} lần)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">So với đường kính Hệ Mặt Trời:</p>
            <p className="text-lg font-bold text-edu-teal">{formatExponential(solarSystemPortion)} lần</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(solarSystemPortion)} lần)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">So với đường kính Dải Ngân Hà:</p>
            <p className="text-lg font-bold text-indigo-500">{formatExponential(milkyWayPortion)} lần</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(milkyWayPortion)} lần)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">So với đường kính Vũ trụ quan sát được:</p>
            <p className="text-lg font-bold text-pink-500">{formatExponential(universePortion)} lần</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(universePortion)} lần)</p>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mt-4 space-y-2">
          <p>Độ dày giấy ban đầu thường khoảng 0.1mm. Mỗi lần gấp đôi sẽ tăng độ dày lên gấp đôi.</p>
          <p className="font-semibold">Thực tế, một tờ giấy chỉ có thể gấp được khoảng 7-8 lần.</p>
          <p>Nhưng nếu có thể gấp liên tục, chỉ cần khoảng 42 lần gấp là sẽ đến Mặt Trăng!</p>
        </div>
      </div>
    </div>
  );
};

export default PaperFoldingCalculator;
