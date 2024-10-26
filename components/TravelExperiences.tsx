import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ArrowUpIcon, ArrowDownIcon, GlobeIcon, HeartIcon, SearchIcon, UtensilsIcon, PaletteIcon, DumbbellIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export default function TravelExperiences() {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: "TravelXP",
      heroTitle: "Discover Life-Changing Travel Experiences",
      searchPlaceholder: "Search experiences or destinations",
      search: "Search",
    },
    es: {
      title: "ViajeXP",
      heroTitle: "Descubre Experiencias de Viaje que Cambian la Vida",
      searchPlaceholder: "Buscar experiencias o destinos",
      search: "Buscar",
    },
    fr: {
      title: "VoyageXP",
      heroTitle: "Découvrez des Expériences de Voyage qui Changent la Vie",
      searchPlaceholder: "Rechercher des expériences ou des destinations",
      search: "Rechercher",
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">{t.title}</div>
          <Button>{t.search}</Button>
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem onClick={() => setLanguage("en")}>English</SelectItem>
              <SelectItem onClick={() => setLanguage("es")}>Español</SelectItem>
              <SelectItem onClick={() => setLanguage("fr")}>Français</SelectItem>
            </SelectContent>
          </Select>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.heroTitle}</h1>
          <div className="flex justify-center">
            <Input className="w-1/2 mr-2" placeholder={t.searchPlaceholder} />
            <Button><SearchIcon className="mr-2 h-4 w-4" /> {t.search}</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
