"use client";
import React, { useState } from 'react';
import { Button } from "./button";
import { Input } from "./input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

export default function TravelExperiences() {
  const [activeTab, setActiveTab] = useState('top');
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: "TravelXP",
      heroTitle: "Discover Life-Changing Travel Experiences",
      searchPlaceholder: "Search experiences or destinations",
      search: "Search",
      topExperiences: "Top Experiences",
      browseByCountry: "Browse by Country",
      browseByCategory: "Browse by Category",
      bookNow: "Book Now",
      explore: "Explore",
      lifeChangingExperiences: "Life-Changing Experiences",
      addToWishlist: "Add to Wishlist",
      footer: "All rights reserved.",
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">{t.title}</div>
          <Button variant="ghost">{t.search}</Button>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
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
