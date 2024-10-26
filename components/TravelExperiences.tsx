Certainly! I'll rewrite your entire `TravelExperiences.tsx` file with relative imports and ensure it aligns with the configuration changes. Here’s the updated file content:

### Updated `TravelExperiences.tsx`

```typescript
"use client";
import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ArrowUpIcon, ArrowDownIcon, GlobeIcon, HeartIcon, SearchIcon, UtensilsIcon, PaletteIcon, DumbbellIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function TravelExperiences() {
  const [activeTab, setActiveTab] = useState('top');
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: "TravelXP",
      destinations: "Destinations",
      experiences: "Experiences",
      community: "Community",
      signUp: "Sign Up",
      heroTitle: "Discover Life-Changing Travel Experiences",
      heroSubtitle: "Explore the world's best destinations and create unforgettable memories",
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
      food: "Food",
      alternativeCulture: "Alternative Culture",
      bootcamp: "Bootcamp",
      sport: "Sport",
      business: "Business",
    },
    // Additional language options can be added here as needed
  };

  const t = translations[language];

  const topExperiences = [
    { id: 1, title: "Northern Lights in Iceland", votes: 1250, country: "Iceland" },
    { id: 2, title: "Machu Picchu Trek", votes: 980, country: "Peru" },
    { id: 3, title: "Great Barrier Reef Dive", votes: 875, country: "Australia" },
  ];

  const countries = [
    { name: "Japan", image: "/placeholder.svg?height=100&width=200" },
    { name: "Italy", image: "/placeholder.svg?height=100&width=200" },
    { name: "Thailand", image: "/placeholder.svg?height=100&width=200" },
  ];

  const categories = [
    { name: t.food, icon: <UtensilsIcon className="h-6 w-6" /> },
    { name: t.alternativeCulture, icon: <PaletteIcon className="h-6 w-6" /> },
    { name: t.bootcamp, icon: <GraduationCapIcon className="h-6 w-6" /> },
    { name: t.sport, icon: <DumbbellIcon className="h-6 w-6" /> },
    { name: t.business, icon: <BriefcaseIcon className="h-6 w-6" /> },
  ];

  const lifeChangingExperiences = [
    { title: "Volunteer in African Wildlife Reserve", description: "Make a difference in animal conservation", image: "/placeholder.svg?height=200&width=300" },
    { title: "Meditation Retreat in Bali", description: "Find inner peace and transform your mindset", image: "/placeholder.svg?height=200&width=300" },
    { title: "Hike the Appalachian Trail", description: "Challenge yourself on a 2,190 mile journey", image: "/placeholder.svg?height=200&width=300" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">{t.title}</div>
          <div className="flex space-x-4 items-center">
            <Button variant="ghost">{t.destinations}</Button>
            <Button variant="ghost">{t.experiences}</Button>
            <Button variant="ghost">{t.community}</Button>
            <Button>{t.signUp}</Button>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.heroTitle}</h1>
          <p className="text-xl text-gray-600 mb-8">{t.heroSubtitle}</p>
          <div className="flex justify-center">
            <Input className="w-1/2 mr-2" placeholder={t.searchPlaceholder} />
            <Button><SearchIcon className="mr-2 h-4 w-4" /> {t.search}</Button>
          </div>
        </section>

        <Tabs defaultValue="top" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="top" onClick={() => setActiveTab('top')}>{t.topExperiences}</TabsTrigger>
            <TabsTrigger value="countries" onClick={() => setActiveTab('countries')}>{t.browseByCountry}</TabsTrigger>
            <TabsTrigger value="categories" onClick={() => setActiveTab('categories')}>{t.browseByCategory}</TabsTrigger>
          </TabsList>
          <TabsContent value="top">
            <div className="grid gap-6 mt-6">
              {topExperiences.map((exp) => (
                <Card key={exp.id}>
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.country}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Button variant="outline" size="icon" className="mr-2">
                        <ArrowUpIcon className="h-4 w-4" />
                      </Button>
                      <span className="font-bold">{exp.votes}</span>
                      <Button variant="outline" size="icon" className="ml-2">
                        <ArrowDownIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button>{t.bookNow}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="countries">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {countries.map((country) => (
                <Card key={country.name}>
                  <CardHeader>
                    <CardTitle>{country.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={country.image} alt={country.name} className="w-full h-32 object-cover rounded-md" />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full"><GlobeIcon className="mr-2 h-4 w-4" /> {t.explore}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="categories">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
              {categories.map((category) => (
                <Card key={category.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center">
                      {category.icon}
                      <span className="ml-2">{category.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full">{t.explore}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t.lifeChangingExperiences}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lifeChangingExperiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={exp.image} alt={exp.title} className="w-full h-40 object-cover rounded-md mb-4" />
                  <CardDescription>{exp.description}</CardDescription>
                </CardContent>
