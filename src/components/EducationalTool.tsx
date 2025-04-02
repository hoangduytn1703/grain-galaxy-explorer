
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator, Clock, BookOpen, Lightbulb, BookMarked } from "lucide-react";
import RiceCalculator from "./RiceCalculator";
import CompoundInterestCalculator from "./CompoundInterestCalculator";
import LightDistanceCalculator from "./LightDistanceCalculator";
import PaperFoldingCalculator from "./PaperFoldingCalculator";

const EducationalTool = () => {
  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Công Cụ Học Tập</h1>
        <p className="text-xl text-gray-600">Khám phá những khái niệm toán học và vật lý tuyệt vời!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Math Tools Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Calculator className="h-5 w-5" /> Hạt Thóc Trên Bàn Cờ
            </CardTitle>
            <CardDescription>
              Khám phá sức mạnh của hàm số mũ
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RiceCalculator />
          </CardContent>
        </Card>

        {/* Compound Interest Card */}
        <Card className="shadow-lg">
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
      </div>

      {/* Light Distance and Paper Folding Cards in a grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg">
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

        <Card className="shadow-lg">
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
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center justify-center gap-2">
          <BookOpen className="h-6 w-6" /> Học Tập Là Cả Một Cuộc Phiêu Lưu!
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Những công cụ này giúp học sinh hiểu được các khái niệm toán học và vật lý qua những ví dụ thực tế.
          Khám phá sức mạnh của hàm số mũ, lãi kép và thế giới rộng lớn của vũ trụ!
        </p>
      </div>
    </div>
  );
};

export default EducationalTool;
