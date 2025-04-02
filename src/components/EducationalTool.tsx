
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calculator, Clock, BookOpen, Lightbulb } from "lucide-react";
import RiceCalculator from "./RiceCalculator";
import CompoundInterestCalculator from "./CompoundInterestCalculator";
import LightDistanceCalculator from "./LightDistanceCalculator";

const EducationalTool = () => {
  const [mathModalOpen, setMathModalOpen] = useState(false);
  const [lightModalOpen, setLightModalOpen] = useState(false);

  return (
    <div className="container px-4 py-8 mx-auto max-w-4xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Công Cụ Học Tập</h1>
        <p className="text-xl text-gray-600">Khám phá những khái niệm toán học và vật lý tuyệt vời!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Math Tools Modal */}
        <Dialog open={mathModalOpen} onOpenChange={setMathModalOpen}>
          <DialogTrigger asChild>
            <Button 
              className="h-48 flex flex-col items-center justify-center gap-4 text-xl shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-edu-blue to-edu-green hover:from-edu-blue/90 hover:to-edu-green/90"
            >
              <Calculator size={48} />
              <span>Công Cụ Toán Học</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2">
                <Calculator className="h-5 w-5" /> Công Cụ Toán Học
              </DialogTitle>
              <DialogDescription>
                Khám phá sức mạnh của hàm số mũ và lãi kép
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <Tabs defaultValue="rice">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="rice" className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" /> Hạt Thóc Trên Bàn Cờ
                  </TabsTrigger>
                  <TabsTrigger value="interest" className="flex items-center gap-2">
                    <Calculator className="h-4 w-4" /> Lãi Suất Kép
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="rice">
                  <RiceCalculator />
                </TabsContent>

                <TabsContent value="interest">
                  <CompoundInterestCalculator />
                </TabsContent>
              </Tabs>
            </div>
          </DialogContent>
        </Dialog>

        {/* Light Distance Modal */}
        <Dialog open={lightModalOpen} onOpenChange={setLightModalOpen}>
          <DialogTrigger asChild>
            <Button 
              className="h-48 flex flex-col items-center justify-center gap-4 text-xl shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-edu-purple to-edu-pink hover:from-edu-purple/90 hover:to-edu-pink/90"
            >
              <Clock size={48} />
              <span>Khoảng Cách Ánh Sáng</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2">
                <Clock className="h-5 w-5" /> Khoảng Cách Ánh Sáng
              </DialogTitle>
              <DialogDescription>
                Hiểu được khoảng cách vũ trụ thông qua tốc độ ánh sáng
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <LightDistanceCalculator />
            </div>
          </DialogContent>
        </Dialog>
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
