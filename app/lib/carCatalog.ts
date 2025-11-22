export type CarCard = {
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

export const carCatalog: CarCard[] = [
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
    image: "/cars/r34-skyline.jpg",
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
    image: "/cars/supra-mk4.jpg",
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
    image: "/cars/rx7-fd.jpg",
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
    image: "/cars/nsx-na1.jpg",
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
    image: "/cars/evo9.jpg",
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
    image: "/cars/s2000.jpg",
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
    image: "/cars/silvia-s15.jpg",
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
    image: "/cars/impreza-22b.jpg",
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
    image: "/cars/mark2.jpg",
    palette: {
      from: "from-blue-500/50",
      via: "via-yellow-400/30",
      to: "to-black/80",
    },
  }
];

