"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { getGarage, toggleGarage as toggleGarageStorage } from "../lib/garage";
import { carCatalog } from "../lib/carCatalog";
import Navigation from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function Garage() {
  const [garage, setGarage] = useState<string[]>([]);

  // Ззагрузка из localstorage
  useEffect(() => {
    setGarage(getGarage());
    const handleUpdate = (e: CustomEvent) => setGarage(e.detail);
    window.addEventListener("garage-updated", handleUpdate as EventListener);
    return () => window.removeEventListener("garage-updated", handleUpdate as EventListener);
  }, []);

  const garageCars = useMemo(
    () => carCatalog.filter((car) => garage.includes(car.id)),
    [garage]
  );

  const toggleGarage = (carId: string) => {
    toggleGarageStorage(carId);
    setGarage(getGarage());
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="w-full px-8 py-6 flex items-center justify-between border-b">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            GarageCars
          </h1>
        </div>
        <Navigation />
      </header>

      <main className="w-full px-8 py-8">
        {garageCars.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="mb-6 text-6xl"></div>
            <p className="text-2xl font-semibold mb-2">Гараж пуст</p>
            <p className="text-muted-foreground mb-8">Добавь автомобили из каталога</p>
            <Button asChild size="lg">
              <Link href="/">Перейти в каталог</Link>
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Мои автомобили</h2>
              <p className="text-muted-foreground">Всего: {garageCars.length}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {garageCars.map((car) => (
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
                        variant="destructive"
                        size="sm"
                        className="shrink-0"
                      >
                        Удалить
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{car.description}</p>
                    <div className="grid grid-cols-2 gap-2">
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
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
