"use client";

import Image from "next/image";
<<<<<<< HEAD
import { useMemo, useState } from "react";
import Link from "next/link"

type Segment = "Гиперкар" | "GT" | "Трек";

type CarCard = {
  id: string;
  name: string;
  brand: string;
  segment: Segment;
  power: number;
  acceleration: number;
  topSpeed: number;
  price: string;
  description: string;
  highlight: string;
  trackRecord: string;
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
    id: "sf90xx",
    name: "SF90 XX Stradale",
    brand: "Ferrari",
    segment: "Гиперкар",
    power: 1030,
    acceleration: 2.3,
    topSpeed: 340,
    price: "≈ 4,9 млн €",
    description:
      "Трековый пакет XX с допуском на дороги общего пользования и гибридным V8.",
    highlight: "Активная аэродинамика и пресеты XX",
    trackRecord: "Fiorano: 1:17.3",
    heroStat: "limited 799",
    image:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-rose-500/60",
      via: "via-orange-400/40",
      to: "to-yellow-300/30",
    },
  },
  {
    id: "huracan",
    name: "Huracán STO SC 10°",
    brand: "Lamborghini",
    segment: "Трек",
    power: 640,
    acceleration: 3,
    topSpeed: 310,
    price: "≈ 550 тыс. €",
    description:
      "Программа Squadra Corse с ручной доводкой аэродинамики и гоночным телеметрическим пакетом.",
    highlight: "SC telemetry + вертикальные кильи",
    trackRecord: "Imola: 1:47.6",
    heroStat: "club sport",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-emerald-400/60",
      via: "via-cyan-400/40",
      to: "to-slate-900/60",
    },
  },
  {
    id: "porschegt3rs",
    name: "911 GT3 RS Manthey",
    brand: "Porsche",
    segment: "Трек",
    power: 525,
    acceleration: 3,
    topSpeed: 296,
    price: "≈ 380 тыс. €",
    description:
      "Пакет Manthey Performance: облегчённые диски, подвеска KW Competition и новый aero kit.",
    highlight: "7,03 мин по Нюрбургрингу",
    trackRecord: "Nordschleife: 6:49.3",
    heroStat: "manthey",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-yellow-400/70",
      via: "via-lime-300/50",
      to: "to-slate-900/70",
    },
  },
  {
    id: "gemballa",
    name: "Gemballa Marsien",
    brand: "Gemballa",
    segment: "GT",
    power: 750,
    acceleration: 2.6,
    topSpeed: 330,
    price: "≈ 1,6 млн €",
    description:
      "Safari-суперкар с регулируемым клиренсом и подвеской Reiger для ралли и асфальта.",
    highlight: "Титановая защита днища",
    trackRecord: "Empty Quarter: off-road stage",
    heroStat: "safari",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-orange-500/60",
      via: "via-amber-400/40",
      to: "to-stone-900/70",
    },
  },
  {
    id: "amrone77",
    name: "Valkyrie AMR Pro",
    brand: "Aston Martin",
    segment: "Гиперкар",
    power: 1015,
    acceleration: 2.2,
    topSpeed: 360,
    price: "≈ 3,3 млн €",
    description:
      "Версия без дорожного допуска с удлинённым шасси, аэродинамикой Le Mans и V12 Cosworth.",
    highlight: "5Г притяжение на пике",
    trackRecord: "Qatar: 1:32.5",
    heroStat: "amr pro",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-emerald-500/60",
      via: "via-lime-400/30",
      to: "to-slate-950/80",
    },
  },
  {
    id: "rimac",
    name: "Rimac Nevera Time Attack",
    brand: "Rimac",
    segment: "Гиперкар",
    power: 1914,
    acceleration: 1.9,
    topSpeed: 412,
    price: "≈ 2,5 млн €",
    description:
      "Электрический гиперкар со 1500 Нм и рекордом Goodwood FoS, адаптивное распределение тяги.",
    highlight: "4 мотора + torque vector",
    trackRecord: "Goodwood: 49.32 c",
    heroStat: "time attack",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-sky-500/50",
      via: "via-blue-500/40",
      to: "to-indigo-900/70",
    },
  },
  {
    id: "amg",
    name: "Mercedes-AMG GT Track Series",
    brand: "Mercedes-AMG",
    segment: "Трек",
    power: 734,
    acceleration: 3.1,
    topSpeed: 320,
    price: "≈ 405 тыс. €",
    description:
      "Customer racing программа с полуавтоматикой телеметрии, карбоновым аэропакетом и BOSCH ABS.",
    highlight: "40 экземпляров",
    trackRecord: "Spa: 2:19.9",
    heroStat: "track series",
    image:
      "https://images.unsplash.com/photo-1493236267266-0d9df1c45f48?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-slate-200/40",
      via: "via-slate-600/40",
      to: "to-black/70",
    },
  },
  {
    id: "bmwm4",
    name: "BMW M4 CSL",
    brand: "BMW",
    segment: "GT",
    power: 550,
    acceleration: 3.7,
    topSpeed: 307,
    price: "≈ 208 тыс. €",
    description:
      "Лёгкая версия CSL: минус 100 кг, карбоновые сиденья, титановый глушитель и настройки M Track.",
    highlight: "1000 экземпляров",
    trackRecord: "Nordschleife: 7:17.8",
    heroStat: "club sport",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    palette: {
      from: "from-red-500/50",
      via: "via-slate-800/60",
      to: "to-black/80",
    },
  },
];

const focusSegments: Array<{ label: string; value: Segment | "Все" }> = [
  { label: "Все фокусы", value: "Все" },
  { label: "Гиперкары", value: "Гиперкар" },
  { label: "GT туры", value: "GT" },
  { label: "Трек-дни", value: "Трек" },
];

const heroStats = [
  { label: "0-100 км/ч", value: "1,9 - 3,7 c" },
  { label: "Мощность", value: "525 — 1914 л.с." },
];

const trackCalendar = [
  {
    stage: "Imola Track Warm-up",
    date: "апрель",
    vibe: "сухой асфальт + SC telemetry",
  },
  {
    stage: "Nordschleife Focus",
    date: "июнь",
    vibe: "ночные сессии Manthey",
  },
  {
    stage: "Goodwood Shootout",
    date: "июль",
    vibe: "тайм-аттак электрического пакета",
  },
  {
    stage: "Spa GT Masters",
    date: "сентябрь",
    vibe: "дожди и длинные связки 4-го сектора",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("Все марки");
  const [segmentFilter, setSegmentFilter] = useState<Segment | "Все">("Все");
  const [garage, setGarage] = useState<string[]>(["porschegt3rs"]);

  const brands = useMemo(
    () => ["Все марки", ...new Set(carCatalog.map((car) => car.brand))],
    []
  );

  const filteredCars = useMemo(() => {
    return carCatalog.filter((car) => {
      const matchesBrand =
        brandFilter === "Все марки" || car.brand === brandFilter;
      const matchesSegment =
        segmentFilter === "Все" || car.segment === segmentFilter;
      const matchesSearch =
        car.name.toLowerCase().includes(search.toLowerCase()) ||
        car.brand.toLowerCase().includes(search.toLowerCase()) ||
        car.highlight.toLowerCase().includes(search.toLowerCase());
      return matchesBrand && matchesSegment && matchesSearch;
    });
  }, [brandFilter, segmentFilter, search]);
=======
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
>>>>>>> 673215e (..)

  const garageCars = useMemo(
    () => carCatalog.filter((car) => garage.includes(car.id)),
    [garage]
  );

  const toggleGarage = (carId: string) => {
<<<<<<< HEAD
    setGarage((prev) =>
      prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-2xl blur-3xl" />
        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-8 pt-10">
          <div>
            <h1 className="text-3xl font-semibold text-white">
              Каталог спортивных автомобилей
          </h1>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
          <Link
                href="/"
                className="rounded-xl border border-white/30 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80"
              >
              главная
            </Link>
            <Link
                href="#"
                className="rounded-xl border border-white/30 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80"
              >
                гараж
            </Link>
          </div>
        </header>
      </div>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24">

        <section className="mt-16 rounded-xl border border-white/10 bg-linear-to-br from-white/10 via-fuchsia-500/10 to-slate-900/60 p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Garage / избранное
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Персональный гараж
              </h2>
              <p className="mt-2 max-w-2xl text-slate-200">
                Сохраняй редкие серии, отслеживай доступность и планируй, в
                какой уикенд вызывать команду механиков.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/30 px-4 py-2 text-sm text-white/80">
              <span>Всего моделей</span>
              <span className="rounded-xl bg-white/20 px-3 py-1 text-white">
                {garage.length}
              </span>
            </div>
          </div>

          {garageCars.length === 0 ? (
            <p className="mt-8 rounded-2xl border border-dashed border-white/30 bg-black/30 px-6 py-8 text-center text-white/70">
              Гараж пуст. Добавь хотя бы один автомобиль из каталога.
            </p>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {garageCars.map((car) => (
                <div
                  key={car.id}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                        {car.brand}
                      </p>
                      <h3 className="text-xl font-semibold text-white">
                        {car.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => toggleGarage(car.id)}
                      className="text-sm text-white/70 underline"
                    >
                      Удалить
                    </button>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{car.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
                    <span>{car.trackRecord}</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em]">
                      {car.heroStat}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              календарь выездов
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Трек-сезон клуба
            </h2>
            <div className="mt-6 space-y-4">
              {trackCalendar.map((stage) => (
                <div
                  key={stage.stage}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {stage.date}
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">
                      {stage.stage}
                    </p>
                    <p className="text-sm text-white/70">{stage.vibe}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-linear-to-br from-slate-900 via-indigo-900 to-black p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              как попасть
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Клубная заявка
            </h2>
            <div className="mt-6 space-y-4 text-sm text-white/80">
              <p>
                • Выбери до пяти автомобилей и отслеживай их статус в гараже.
              </p>
              <p>
                • Синхронизируйся с персональным антитрейлером и трек-инженером.
              </p>
              <p>• Запроси квоту напрямую — мы покажем доступные окна.</p>
            </div>
            <button className="mt-8 w-full rounded-full bg-white px-6 py-3 text-slate-900 font-medium">
              Оставить заявку
            </button>
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
>>>>>>> 673215e (..)
      </main>
    </div>
  );
}
