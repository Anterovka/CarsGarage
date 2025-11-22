"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { getGarage, toggleGarage as toggleGarageStorage } from "./lib/garage";
import { carCatalog } from "./lib/carCatalog";
import Navigation from "./components/Navigation";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("Все марки");
  const [garage, setGarage] = useState<string[]>([]);

  // localstorage
  useEffect(() => {
    setGarage(getGarage());
    const handleUpdate = (e: CustomEvent) => setGarage(e.detail);
    window.addEventListener("garage-updated", handleUpdate as EventListener);
    return () => window.removeEventListener("garage-updated", handleUpdate as EventListener);
  }, []);

  const brands = useMemo(
    () => ["Все марки", ...new Set(carCatalog.map((car) => car.brand))],
    []
  );

  // фильтры
  const filteredCars = useMemo(() => {
    const searchLower = search.toLowerCase();
    return carCatalog.filter((car) => {
      const matchesBrand = brandFilter === "Все марки" || car.brand === brandFilter;
      const matchesSearch = 
        car.name.toLowerCase().includes(searchLower) ||
        car.brand.toLowerCase().includes(searchLower) ||
        car.highlight.toLowerCase().includes(searchLower);
      return matchesBrand && matchesSearch;
    });
  }, [brandFilter, search]);

  const toggleGarage = (carId: string) => {
    toggleGarageStorage(carId);
    setGarage(getGarage());
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="w-full px-8 py-6 flex items-center justify-between border-b">
        <div>
          <h1 className="text-2xl font-bold bg-primary bg-clip-text text-transparent">
            GarageCars
          </h1>
        </div>
        <Navigation />
      </header>

      <main className="w-full px-8 py-8">
        <div className="mb-8 flex flex-col items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск по названию, бренду..."
            className="w-full max-w-2xl border border-input bg-background rounded-lg px-4 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
        <div className="flex gap-3 mb-8 flex-wrap justify-center">
          {brands.map((brand) => (
            <Button
              key={brand}
              onClick={() => setBrandFilter(brand)}
              variant={brandFilter === brand ? "default" : "outline"}
              size="sm"
              className="transition-all"
            >
              {brand}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCars.map((car) => {
            const inGarage = garage.includes(car.id);
            return (
              <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1">
                      <CardDescription className="text-xs">{car.brand}</CardDescription>
                      <CardTitle className="text-lg">{car.name}</CardTitle>
                    </div>
                    <Button
                      onClick={() => toggleGarage(car.id)}
                      variant={inGarage ? "default" : "outline"}
                      size="sm"
                      className="shrink-0"
                    >
                      {inGarage ? "В гараже" : "Добавить"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{car.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="border rounded-lg px-3 py-2 text-center">
                      <div className="text-xs text-muted-foreground">Мощность</div>
                      <div className="text-sm font-semibold">{car.power} л.с.</div>
                    </div>
                    <div className="border rounded-lg px-3 py-2 text-center">
                      <div className="text-xs text-muted-foreground">Разгон</div>
                      <div className="text-sm font-semibold">{car.acceleration}с</div>
                    </div>
                    <div className="border rounded-lg px-3 py-2 text-center">
                      <div className="text-xs text-muted-foreground">Скорость</div>
                      <div className="text-sm font-semibold">{car.topSpeed} км/ч</div>
                    </div>
                    <div className="border rounded-lg px-3 py-2 text-center">
                      <div className="text-xs text-muted-foreground">Цена</div>
                      <div className="text-sm font-semibold">{car.price}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
