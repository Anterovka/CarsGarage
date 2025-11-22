"use client";

import Image from "next/image";
<<<<<<< HEAD
import { useMemo, useState } from "react";
import Link from "next/link"

type CarCard = {
  id: string;
  name: string;
  brand: string;
  power: number;
  acceleration: number;
  topSpeed: number;
  price: string;
  description: string;
  highlight: string;
  heroStat: string;
  image: string;
  palette: {
    from: string;
    via: string;
    to: string;
  };
};

const carCatalog: CarCard[] = [
  {
    id: "r34-skyline",
    name: "Skyline GT-R R34",
    brand: "Nissan",
    power: 330,
    acceleration: 4.9,
    topSpeed: 300,
    price: "≈ 150 тыс. $",
    description: "Легендарный Godzilla с системой полного привода ATTESA E-TS и двигателем RB26DETT.",
    highlight: "RB26DETT twin-turbo",
    heroStat: "iconic",
    image: "https://avatars.mds.yandex.net/get-verba/3587101/2a00000183c3b7f7e6b8064c5c7d1731a1a0/cattouchretcr&w=1200&q=80",
    palette: {
      from: "from-blue-600/60",
      via: "via-neutral-700/40",
      to: "to-gray-900/70",
    },
  },
  {
    id: "supra-mk4",
    name: "Supra MKIV",
    brand: "Toyota",
    power: 320,
    acceleration: 4.6,
    topSpeed: 290,
    price: "≈ 120 тыс. $",
    description: "Знаменитый 2JZ-GTE с потенциалом до 1000+ л.с., культовая модель из Fast and Furious.",
    highlight: "2JZ-GTE tuning potential",
    heroStat: "1000+ hp",
    image: "https://images.unsplash.com/photo-1624704766722-6d289e0e3c72?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-orange-500/60",
      via: "via-red-500/40",
      to: "to-black/80",
    },
  },
  {
    id: "rx7-fd",
    name: "RX-7 FD3S",
    brand: "Mazda",
    power: 280,
    acceleration: 5.3,
    topSpeed: 260,
    price: "≈ 80 тыс. $",
    description: "Роторный двигатель 13B-REW с последовательным твин-турбо, идеальный вес и развесовка.",
    highlight: "13B-REW rotary",
    heroStat: "rotary",
    image: "https://images.unsplash.com/photo-1624704766784-3cdc36d5cab4?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-yellow-400/60",
      via: "via-red-500/50",
      to: "to-black/80",
    },
  },
  {
    id: "nsx-na1",
    name: "NSX Type R",
    brand: "Honda",
    power: 280,
    acceleration: 5.7,
    topSpeed: 270,
    price: "≈ 200 тыс. $",
    description: "Алюминиевый шасси, двигатель VTEC V6 и настройки от Айртона Сенны. Японский Ferrari.",
    highlight: "VTEC V6 + Senna tune",
    heroStat: "senna",
    image: "https://images.unsplash.com/photo-1627335516267-41c0aeb34ef2?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-red-500/60",
      via: "via-black/50",
      to: "to-gray-900/80",
    },
  },
  {
    id: "evo9",
    name: "Lancer Evolution IX",
    brand: "Mitsubishi",
    power: 280,
    acceleration: 4.8,
    topSpeed: 250,
    price: "≈ 60 тыс. $",
    description: "MIVEC турбо-двигатель 4G63, полный привод ACD и активный дифференциал AYC.",
    highlight: "4G63T MIVEC",
    heroStat: "rally",
    image: "https://images.unsplash.com/photo-1627335652919-426c35eb6ac5?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-white/40",
      via: "via-red-500/40",
      to: "to-black/70",
    },
  },
  {
    id: "s2000",
    name: "S2000 AP2",
    brand: "Honda",
    power: 240,
    acceleration: 6.2,
    topSpeed: 240,
    price: "≈ 45 тыс. $",
    description: "9000-оборотный F20C, идеальная развесовка 50:50 и механическая КПП с короткими ходами.",
    highlight: "9000 rpm F20C",
    heroStat: "9000 rpm",
    image: "https://images.unsplash.com/photo-1624704766734-8934c2cbe1e6?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-yellow-300/50",
      via: "via-black/40",
      to: "to-red-600/60",
    },
  },
  {
    id: "silvia-s15",
    name: "Silvia S15 Spec-R",
    brand: "Nissan",
    power: 250,
    acceleration: 5.7,
    topSpeed: 250,
    price: "≈ 55 тыс. $",
    description: "SR20DET турбо-двигатель, многорычажная подвеска и идеальная платформа для дрифта.",
    highlight: "SR20DET drift king",
    heroStat: "drift",
    image: "https://images.unsplash.com/photo-1627335652876-3c6dbb125d31?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-purple-500/50",
      via: "via-blue-500/40",
      to: "to-black/70",
    },
  },
  {
    id: "impreza-22b",
    name: "Impreza 22B STI",
    brand: "Subaru",
    power: 280,
    acceleration: 4.7,
    topSpeed: 255,
    price: "≈ 300 тыс. $",
    description: "Легендарный хэтчбек с двигателем 2.2L и широкими арками, посвященный победам в WRC.",
    highlight: "2.2L boxer + widebody",
    heroStat: "22B",
    image: "https://images.unsplash.com/photo-1627335652920-8fbb5a4c6c7a?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-blue-500/50",
      via: "via-yellow-400/30",
      to: "to-black/80",
    },
  },
  {
    id: "mark2",
    name: "Mark II",
    brand: "Toyota",
    power: 300,
    acceleration: 6.2,
    topSpeed: 260,
    price: "50 тыс. $",
    description: "Легендарный автомобиль для дрифта, JDM король Японии, любитель наматываться на столбы",
    highlight: "Боком только так",
    heroStat: "22B",
    image: "https://images.unsplash.com",
    palette: {
      from: "from-blue-500/50",
      via: "via-yellow-400/30",
      to: "to-black/80",
    },
  }
];


=======
import { useMemo, useState, useEffect } from "react";
import { getGarage, toggleGarage as toggleGarageStorage } from "./lib/garage";
import { carCatalog } from "./lib/carCatalog";
import Navigation from "./components/Navigation";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
>>>>>>> 673215e (..)

export default function Home() {
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("Все марки");
<<<<<<< HEAD
  const [garage, setGarage] = useState<string[]>(["porschegt3rs"]);
=======
  const [garage, setGarage] = useState<string[]>([]);

  // localstorage
  useEffect(() => {
    setGarage(getGarage());
    const handleUpdate = (e: CustomEvent) => setGarage(e.detail);
    window.addEventListener("garage-updated", handleUpdate as EventListener);
    return () => window.removeEventListener("garage-updated", handleUpdate as EventListener);
  }, []);
>>>>>>> 673215e (..)

  const brands = useMemo(
    () => ["Все марки", ...new Set(carCatalog.map((car) => car.brand))],
    []
  );

<<<<<<< HEAD
  const filteredCars = useMemo(() => {
    return carCatalog.filter((car) => {
      const matchesBrand =
        brandFilter === "Все марки" || car.brand === brandFilter;
      const matchesSearch =
        car.name.toLowerCase().includes(search.toLowerCase()) ||
        car.brand.toLowerCase().includes(search.toLowerCase()) ||
        car.highlight.toLowerCase().includes(search.toLowerCase());
=======
  // фильтры
  const filteredCars = useMemo(() => {
    const searchLower = search.toLowerCase();
    return carCatalog.filter((car) => {
      const matchesBrand = brandFilter === "Все марки" || car.brand === brandFilter;
      const matchesSearch = 
        car.name.toLowerCase().includes(searchLower) ||
        car.brand.toLowerCase().includes(searchLower) ||
        car.highlight.toLowerCase().includes(searchLower);
>>>>>>> 673215e (..)
      return matchesBrand && matchesSearch;
    });
  }, [brandFilter, search]);

  const toggleGarage = (carId: string) => {
<<<<<<< HEAD
    setGarage((prev) =>
      prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-indigo-100 to-white text-black">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 " />
        <div className="absolute -top-24 rounded-2xl blur-3xl" />
        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-8 pt-10">
          <div>
            <h1 className="text-3xl font-semibold text-black">
              Каталог спортивных автомобилей
          </h1>
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-900">
          <Link
                href="#"
                className="rounded-xl border border-black/30 px-4 py-1 text-xs uppercase tracking-[0.2em] text-black/80"
              >
              главная
            </Link>
            <Link
                href="garage"
                className="rounded-xl border border-black/30 px-4 py-1 text-xs uppercase tracking-[0.2em] text-black/80"
              >
                гараж
            </Link>
          </div>
        </header>

        <section className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 ">
          <div className="rounded-xl border border-black/40 from-indigo-50 via-indigo-200 to-white bg-linear-to-bl p-10 backdrop-blur-2xl">
            <div className="flex flex-col gap-6">
              <div className="text-center">
              <p className="text-4xl uppercase font-bold text-black">
                Выбери свой спортивный автомобиль
              </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="rounded-xl bg-black px-6 py-3 text-neutral-100 transition hover:bg-neutral-700">
                  Смотреть каталог
                </button>
                <button className="rounded-xl border border-black/40 px-6 py-3 text-black transition hover:border-black">
                  Программа клубных выездов
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24">
        <section className="flex flex-col gap-8 rounded-xl border border-black/40 bg-white/5 p-8 -mt-8 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-950">
                фильтры
              </p>
              <h2 className="text-2xl font-semibold text-black">
                Найди свой авто
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setBrandFilter(brand)}
                  className={`rounded-xl px-5 py-2 text-sm transition ${
                    brandFilter === brand
                      ? "bg-neutral-300 text-neutral-900 border border-black/40 hover:bg-neutral-400"
                      : "border border-black/40 text-black/80 hover:bg-neutral-300"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
            </div>
            <div className="flex flex-col gap-3 rounded-xl pt-3 md:flex-row md:items-center">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск по названию, бренду или уникальной технологии"
                className="w-full rounded-xl border border-black/40 bg-white/70 px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
        </div>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-950">
              каталог
            </p>
            <h2 className="text-3xl font-semibold text-black">
              Спортивные автомобили
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filteredCars.map((car) => {
              const inGarage = garage.includes(car.id);
              return (
                <article
                  key={car.id}
                  className={`relative overflow-hidden rounded-xl border border-black/40 bg-linear-to-br  from-indigo-100/50 to-white/50 p-6`}
                >
                  <div
                    className={`absolute inset-0 -z-10 bg-linear-to-r ${car.palette.from} ${car.palette.via} ${car.palette.to}`}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                        {car.brand}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-black">
                        {car.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => toggleGarage(car.id)}
                      className={`rounded-xl px-5 py-2 text-sm transition ${
                        inGarage
                          ? "bg-neutral-300 text-neutral-900 border-black/40 border hover:bg-neutral-400 "
                          : "border border-black/40 text-black/80 hover:bg-neutral-300"
                      }`}
                    >
                      {inGarage ? "В гараже" : "Добавить"}
                    </button>
                  </div>
                  <p className="mt-4 text-sm text-black/80">{car.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-black">
                    <span className="rounded-xl border border-black/30 px-3 py-1">
                      {car.power} л.с.
                    </span>
                    <span className="rounded-xl border border-black/30 px-3 py-1">
                      0-100: {car.acceleration} c
                    </span>
                    <span className="rounded-xl border border-black/30 px-3 py-1">
                      {car.topSpeed} км/ч
                    </span>
                    <span className="rounded-xl border border-black/30 px-3 py-1">
                      {car.price}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-col gap-4 md:flex-row">
                    <div className="flex h-40 flex-1 items-center justify-center rounded-xl border border-black/20 bg-black/30">
            <Image
                        src={car.image}
                        alt={car.name}
                        width={280}
                        height={160}
                        className="h-full w-full rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
=======
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
>>>>>>> 673215e (..)
      </main>
    </div>
  );
}
