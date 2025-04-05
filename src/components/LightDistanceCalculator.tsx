
import React, { useState, useEffect } from "react";
import {
  lightDistanceInKm,
  kmToLightYears,
  kmToEarthToMoonTrips,
  kmToEarthToSunTrips,
  kmToMilkyWayEdgeTrips,
  kmToEarthCircumferenceTrips,
  convertTimeToSeconds,
  compareToUniverseAge
} from "@/utils/calculators";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Clock } from "lucide-react";

const timeUnits = [
  { value: "second", label: "Giây" },
  { value: "minute", label: "Phút" },
  { value: "hour", label: "Giờ" },
  { value: "day", label: "Ngày" },
  { value: "week", label: "Tuần" },
  { value: "month", label: "Tháng" },
  { value: "year", label: "Năm" }
];

const LightDistanceCalculator = () => {
  const [timeValue, setTimeValue] = useState<number>(1);
  const [timeUnit, setTimeUnit] = useState<string>("second");
  const [distanceKm, setDistanceKm] = useState<number>(0);
  const [lightYears, setLightYears] = useState<number>(0);
  const [moonTrips, setMoonTrips] = useState<number>(0);
  const [sunTrips, setSunTrips] = useState<number>(0);
  const [galaxyEdgePercent, setGalaxyEdgePercent] = useState<number>(0);
  const [earthCircumferences, setEarthCircumferences] = useState<number>(0);
  const [universeAgePercent, setUniverseAgePercent] = useState<number>(0);

  useEffect(() => {
    const seconds = convertTimeToSeconds(timeValue, timeUnit);
    const distance = lightDistanceInKm(seconds);
    const calculatedLightYears = kmToLightYears(distance);
    
    setDistanceKm(distance);
    setLightYears(calculatedLightYears);
    setMoonTrips(kmToEarthToMoonTrips(distance));
    setSunTrips(kmToEarthToSunTrips(distance));
    setGalaxyEdgePercent(kmToMilkyWayEdgeTrips(distance) * 100);
    setEarthCircumferences(kmToEarthCircumferenceTrips(distance));
    setUniverseAgePercent(compareToUniverseAge(calculatedLightYears));
  }, [timeValue, timeUnit]);

  const handleTimeValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setTimeValue(isNaN(value) ? 0 : value);
  };

  const handleTimeUnitChange = (value: string) => {
    setTimeUnit(value);
  };

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString('vi-VN', { maximumFractionDigits: 6 });
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
        <Clock size={24} className="text-edu-purple" />
        <h3 className="text-xl font-bold text-edu-purple">Tính Khoảng Cách Ánh Sáng</h3>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2">
            <Label htmlFor="timeValue">Thời gian:</Label>
            <Input
              id="timeValue"
              type="number"
              min="0"
              value={timeValue}
              onChange={handleTimeValueChange}
              className="mt-1 bg-gray-50 border-edu-purple"
            />
          </div>
          
          <div>
            <Label htmlFor="timeUnit">Đơn vị:</Label>
            <Select value={timeUnit} onValueChange={handleTimeUnitChange}>
              <SelectTrigger id="timeUnit" className="mt-1 bg-gray-50 border-edu-purple">
                <SelectValue placeholder="Chọn đơn vị" />
              </SelectTrigger>
              <SelectContent>
                {timeUnits.map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>
                    {unit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Khoảng cách (km):</p>
            <p className="text-lg font-bold text-edu-blue">{formatNumber(distanceKm)} km</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(distanceKm)} km)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Năm ánh sáng:</p>
            <p className="text-lg font-bold text-edu-red">{formatNumber(lightYears)} năm ánh sáng</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(lightYears)} năm ánh sáng)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Số lần từ Trái Đất đến Mặt Trăng:</p>
            <p className="text-lg font-bold text-edu-yellow">{formatNumber(moonTrips)} lần</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(moonTrips)} lần)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Số lần từ Trái Đất đến Mặt Trời:</p>
            <p className="text-lg font-bold text-edu-orange">{formatNumber(sunTrips)} lần</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(sunTrips)} lần)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Phần trăm so với khoảng cách đến rìa Dải Ngân Hà:</p>
            <p className="text-lg font-bold text-edu-teal">{formatNumber(galaxyEdgePercent)}%</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(galaxyEdgePercent)}%)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Số vòng quanh Trái Đất (theo đường xích đạo):</p>
            <p className="text-lg font-bold text-edu-green">{formatNumber(earthCircumferences)} vòng</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(earthCircumferences)} vòng)</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Phần trăm so với tuổi của vũ trụ (13,8 tỷ năm):</p>
            <p className="text-lg font-bold text-edu-purple">{formatNumber(universeAgePercent)}%</p>
            <p className="text-sm text-gray-600">({formatReadableNumber(universeAgePercent)}%)</p>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mt-4">
          <p>Ánh sáng di chuyển với tốc độ 299.792,458 km/giây trong chân không.</p>
        </div>
      </div>
    </div>
  );
};

export default LightDistanceCalculator;
