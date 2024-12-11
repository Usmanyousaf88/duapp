import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Morning from "./pages/Morning";
import AyatAlKursi from "./pages/AyatAlKursi";
import Emotions from "./pages/Emotions";
import Tasbih from "./pages/Tasbih";
import BeforeSleep from "./pages/BeforeSleep";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/morning" element={<Morning />} />
          <Route path="/morning/ayat-al-kursi" element={<AyatAlKursi />} />
          <Route path="/emotions" element={<Emotions />} />
          <Route path="/tasbih" element={<Tasbih />} />
          <Route path="/before-sleep" element={<BeforeSleep />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;