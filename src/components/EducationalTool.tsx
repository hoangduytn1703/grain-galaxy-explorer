import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Calculator,
  Clock,
  BookOpen,
  Lightbulb,
  BookMarked,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import RiceCalculator from "./RiceCalculator";
import CompoundInterestCalculator from "./CompoundInterestCalculator";
import LightDistanceCalculator from "./LightDistanceCalculator";
import PaperFoldingCalculator from "./PaperFoldingCalculator";

const EducationalTool = () => {
  const [selectedTool, setSelectedTool] = useState<string>("rice");

  const handleToolChange = (value: string) => {
    setSelectedTool(value);
  };

  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          Tool Of Akira Gosho
        </h1>
        <p className="text-xl text-gray-600">
          Khám phá những khái niệm toán học và vật lý tuyệt vời!
        </p>
      </div>

      <div className="w-full max-w-md mx-auto mb-6">
        <Label
          htmlFor="tool-selector"
          className="text-lg font-medium mb-2 block text-center"
        >
          Chọn công cụ học tập
        </Label>
        <Select value={selectedTool} onValueChange={handleToolChange}>
          <SelectTrigger
            id="tool-selector"
            className="bg-white border-2 border-gray-300"
          >
            <SelectValue placeholder="Chọn công cụ" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rice">Hạt Thóc Trên Bàn Cờ</SelectItem>
            <SelectItem value="interest">Lãi Suất Kép</SelectItem>
            <SelectItem value="light">Khoảng Cách Ánh Sáng</SelectItem>
            <SelectItem value="paper">Gấp Giấy</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-6">
        {selectedTool === "rice" && (
          <Card className="shadow-lg max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calculator className="h-5 w-5" /> Hạt Thóc Trên Bàn Cờ
              </CardTitle>
              <CardDescription>Khám phá sức mạnh của hàm số mũ</CardDescription>
            </CardHeader>
            <CardContent>
              <RiceCalculator />
            </CardContent>
          </Card>
        )}

        {selectedTool === "interest" && (
          <Card className="shadow-lg max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Lightbulb className="h-5 w-5" /> Lãi Suất Kép
              </CardTitle>
              <CardDescription>
                Hiểu sức mạnh của tăng trưởng theo cấp số nhân
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CompoundInterestCalculator />
            </CardContent>
          </Card>
        )}

        {selectedTool === "light" && (
          <Card className="shadow-lg max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Clock className="h-5 w-5" /> Khoảng Cách Ánh Sáng
              </CardTitle>
              <CardDescription>
                Hiểu được khoảng cách vũ trụ thông qua tốc độ ánh sáng
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LightDistanceCalculator />
            </CardContent>
          </Card>
        )}

        {selectedTool === "paper" && (
          <Card className="shadow-lg max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <BookMarked className="h-5 w-5" /> Gấp Giấy
              </CardTitle>
              <CardDescription>
                Khám phá sự tăng trưởng theo cấp số nhân khi gấp giấy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PaperFoldingCalculator />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EducationalTool;
