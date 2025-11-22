"use client";

import { useState, useMemo, useEffect, useCallback } from "react";

type LessonType = "ЛЕК" | "пр." | "лаб." | "ФК";

interface Lesson {
  date: string;
  dayOfWeek: string;
  time: string;
  subject: string;
  type: LessonType;
  teacher: string;
  room: string;
}

// ——— ДАННЫЕ ———
const lessonData: Lesson[] = [
  { date: "2025-11-17", dayOfWeek: "Понедельник", time: "11:40-13:10", subject: "Дискретная математика с элементами математической логики", type: "ЛЕК", teacher: "Щелкун А.С.", room: "507" },
  { date: "2025-11-17", dayOfWeek: "Понедельник", time: "13:30-15:00", subject: "Информационные технологии", type: "лаб.", teacher: "Артамонова А.Г.", room: "608а" },
  { date: "2025-11-18", dayOfWeek: "Вторник", time: "11:40-13:10", subject: "Иностранный язык в ПД", type: "пр.", teacher: "Еременко О.Н.", room: "608а" },
  { date: "2025-11-18", dayOfWeek: "Вторник", time: "13:30-15:00", subject: "Разработка программных модулей", type: "лаб.", teacher: "Сафонова С.А.", room: "609а" },
  { date: "2025-11-19", dayOfWeek: "Среда", time: "10:00-11:30", subject: "Элементы высшей математики", type: "ЛЕК", teacher: "Щелкун А.С.", room: "507" },
  { date: "2025-11-19", dayOfWeek: "Среда", time: "11:40-13:10", subject: "Элементы высшей математики", type: "пр.", teacher: "Щелкун А.С.", room: "510" },
  { date: "2025-11-19", dayOfWeek: "Среда", time: "13:30-15:00", subject: "Физическая культура", type: "ФК", teacher: "Агаркова Н.Ю.", room: "СЗ/" },
  { date: "2025-11-20", dayOfWeek: "Четверг", time: "11:40-13:10", subject: "Архитектура аппаратных средств", type: "ЛЕК", teacher: "Алекперов И.Д.", room: "608а" },
  { date: "2025-11-20", dayOfWeek: "Четверг", time: "13:30-15:00", subject: "Вычислительные системы и компьютерные сети", type: "лаб.", teacher: "Григорьев Н.М.", room: "602а" },
  { date: "2025-11-21", dayOfWeek: "Пятница", time: "10:00-11:30", subject: "Основы алгоритмизации и программирования", type: "лаб.", teacher: "Сафонова С.А.", room: "608а" },
  { date: "2025-11-21", dayOfWeek: "Пятница", time: "11:40-13:10", subject: "Разработка программных модулей", type: "ЛЕК", teacher: "Сафонова С.А.", room: "507" },
  { date: "2025-11-22", dayOfWeek: "Суббота", time: "11:40-13:10", subject: "Операционные системы и среды", type: "ЛЕК", teacher: "Бахмацкий В.И.", room: "608а" },
  { date: "2025-11-22", dayOfWeek: "Суббота", time: "13:30-15:00", subject: "Операционные системы и среды", type: "лаб.", teacher: "Бахмацкий В.И.", room: "608а" },
  { date: "2025-11-24", dayOfWeek: "Понедельник", time: "11:40-13:10", subject: "Физическая культура", type: "ФК", teacher: "Агаркова Н.Ю.", room: "СЗ/" },
  { date: "2025-11-24", dayOfWeek: "Понедельник", time: "13:30-15:00", subject: "Элементы высшей математики", type: "пр.", teacher: "Щелкун А.С.", room: "303" },
  { date: "2025-11-25", dayOfWeek: "Вторник", time: "11:40-13:10", subject: "Иностранный язык в ПД", type: "пр.", teacher: "Еременко О.Н.", room: "506" },
  { date: "2025-11-25", dayOfWeek: "Вторник", time: "13:30-15:00", subject: "Элементы высшей математики", type: "пр.", teacher: "Щелкун А.С.", room: "507" },
  { date: "2025-11-25", dayOfWeek: "Вторник", time: "15:10-16:40", subject: "Разработка программных модулей", type: "лаб.", teacher: "Сафонова С.А.", room: "608а" },
  { date: "2025-11-26", dayOfWeek: "Среда", time: "11:40-13:10", subject: "Дискретная математика с элементами математической логики", type: "пр.", teacher: "Щелкун А.С.", room: "609а" },
  { date: "2025-11-26", dayOfWeek: "Среда", time: "13:30-15:00", subject: "Вычислительные системы и компьютерные сети", type: "лаб.", teacher: "Григорьев Н.М.", room: "609а" },
  { date: "2025-11-27", dayOfWeek: "Четверг", time: "10:00-11:30", subject: "Основы алгоритмизации и программирования", type: "лаб.", teacher: "Сафонова С.А.", room: "608а" },
  { date: "2025-11-27", dayOfWeek: "Четверг", time: "11:40-13:10", subject: "Архитектура аппаратных средств", type: "лаб.", teacher: "Алекперов И.Д.", room: "609а" },
  { date: "2025-11-28", dayOfWeek: "Пятница", time: "10:00-11:30", subject: "Разработка программных модулей", type: "ЛЕК", teacher: "Сафонова С.А.", room: "608а" },
  { date: "2025-11-28", dayOfWeek: "Пятница", time: "11:40-13:10", subject: "Физическая культура", type: "ФК", teacher: "Агаркова Н.Ю.", room: "СЗ/" },
  { date: "2025-11-28", dayOfWeek: "Пятница", time: "13:30-15:00", subject: "Дискретная математика с элементами математической логики", type: "пр.", teacher: "Щелкун А.С.", room: "608а" },
  { date: "2025-11-29", dayOfWeek: "Суббота", time: "08:20-09:50", subject: "Операционные системы и среды", type: "лаб.", teacher: "Бахмацкий В.И.", room: "608а" },
  { date: "2025-11-29", dayOfWeek: "Суббота", time: "10:00-11:30", subject: "Операционные системы и среды", type: "лаб.", teacher: "Бахмацкий В.И.", room: "608а" },
  { date: "2025-12-01", dayOfWeek: "Понедельник", time: "11:40-13:10", subject: "Дискретная математика с элементами математической логики", type: "ЛЕК", teacher: "Щелкун А.С.", room: "507" },
  { date: "2025-12-01", dayOfWeek: "Понедельник", time: "13:30-15:00", subject: "Информационные технологии", type: "лаб.", teacher: "Артамонова А.Г.", room: "608а" },
  { date: "2025-12-02", dayOfWeek: "Вторник", time: "08:20-09:50", subject: "Операционные системы и среды", type: "ЛЕК", teacher: "Бахмацкий В.И.", room: "608а" },
  { date: "2025-12-02", dayOfWeek: "Вторник", time: "10:00-11:30", subject: "Разработка программных модулей", type: "лаб.", teacher: "Сафонова С.А.", room: "609а" },
  { date: "2025-12-02", dayOfWeek: "Вторник", time: "11:40-13:10", subject: "Иностранный язык в ПД", type: "пр.", teacher: "Еременко О.Н.", room: "507" },
  { date: "2025-12-03", dayOfWeek: "Среда", time: "10:00-11:30", subject: "Иностранный язык в ПД", type: "пр.", teacher: "Еременко О.Н.", room: "506" },
  { date: "2025-12-03", dayOfWeek: "Среда", time: "11:40-13:10", subject: "Элементы высшей математики", type: "пр.", teacher: "Щелкун А.С.", room: "604а" },
  { date: "2025-12-03", dayOfWeek: "Среда", time: "13:30-15:00", subject: "Архитектура аппаратных средств", type: "ЛЕК", teacher: "Алекперов И.Д.", room: "608а" },
  { date: "2025-12-04", dayOfWeek: "Четверг", time: "11:40-13:10", subject: "Дискретная математика с элементами математической логики", type: "пр.", teacher: "Щелкун А.С.", room: "608а" },
  { date: "2025-12-04", dayOfWeek: "Четверг", time: "13:30-15:00", subject: "Вычислительные системы и компьютерные сети", type: "ЛЕК", teacher: "Григорьев Н.М.", room: "604а" },
  { date: "2025-12-05", dayOfWeek: "Пятница", time: "10:00-11:30", subject: "Основы алгоритмизации и программирования", type: "лаб.", teacher: "Сафонова С.А.", room: "608а" },
  { date: "2025-12-05", dayOfWeek: "Пятница", time: "11:40-13:10", subject: "Разработка программных модулей", type: "ЛЕК", teacher: "Сафонова С.А.", room: "608а" },
  { date: "2025-12-06", dayOfWeek: "Суббота", time: "10:00-11:30", subject: "Физическая культура", type: "ФК", teacher: "Агаркова Н.Ю.", room: "СЗ/" },
  { date: "2025-12-06", dayOfWeek: "Суббота", time: "11:40-13:10", subject: "Операционные системы и среды", type: "лаб.", teacher: "Бахмацкий В.И.", room: "608а" },
];

// ——— ХЕЛПЕРЫ ———
const formatDate = (dateStr: string): Date => new Date(dateStr);
const getWeekRange = (date: Date): [Date, Date] => {
  const d = new Date(date);
  const day = d.getDay() || 7;
  const start = new Date(d);
  start.setDate(d.getDate() - day + 1);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return [start, end];
};

const weekKey = (date: Date): string => {
  const [start, end] = getWeekRange(date);
  const ru = { month: "short", day: "numeric" } as const;
  return `${start.toLocaleDateString("ru-RU", ru)} – ${end.toLocaleDateString("ru-RU", ru)}`;
};

const isSameDay = (a: Date, b: Date): boolean =>
  a.getDate() === b.getDate() &&
  a.getMonth() === b.getMonth() &&
  a.getFullYear() === b.getFullYear();

const isSameWeek = (a: Date, b: Date): boolean => {
  const [startA] = getWeekRange(a);
  const [startB] = getWeekRange(b);
  return startA.getTime() === startB.getTime();
};

const parseTime = (timeStr: string): number => {
  const [start] = timeStr.split("-");
  const [h, m] = start.split(":").map(Number);
  return h * 60 + m;
};

// ——— THEME ———
const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  const toggle = useCallback(() => {
    const next = !dark;
    setDark(next);
    if (next) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const isDark = localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    if (isDark) document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button
      type="button"
      onClick={toggle}
      className="group relative flex h-6 w-10 items-center rounded-full bg-gray-200 transition-colors duration-300 dark:bg-gray-700"
      aria-label={dark ? "Включить светлую тему" : "Включить тёмную тему"}
    >
      <span
        className={`absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-transform duration-300 ${
          dark ? "translate-x-5" : ""
        }`}
      />
      <span className="sr-only">Тема</span>
      {dark ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-1 top-1 h-3 w-3 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1 top-1 h-3 w-3 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};

// ——— ICONS ———
const LessonIcon = ({ type }: { type: LessonType }) => {
  const icons = {
    ЛЕК: (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M5 4v3h5.5v11h3V7H19V4z"
          stroke="none"
        />
      </svg>
    ),
    "лаб.": (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          stroke="none"
        />
      </svg>
    ),
    "пр.": (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
          stroke="none"
        />
      </svg>
    ),
    ФК: (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M12 2c-3.31 0-6 2.69-6 6 0 2.46 1.46 4.6 3.5 5.67V17c0 .55.45 1 1 1h1v3h2v-3h1c.55 0 1-.45 1-1v-3.33c2.04-1.07 3.5-3.21 3.5-5.67 0-3.31-2.69-6-6-6z"
          stroke="none"
        />
      </svg>
    ),
  };
  return <span className="text-current">{icons[type]}</span>;
};

// ——— КОМПОНЕНТ ———
export default function SchedulePage() {
  const today = new Date();
  const nowMinutes = today.getHours() * 60 + today.getMinutes();
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);

  // Группируем: неделя → день → пары
  const weeks = useMemo(() => {
    const map = new Map<string, Map<string, Lesson[]>>();

    lessonData.forEach((lesson) => {
      const date = formatDate(lesson.date);
      const wKey = weekKey(date);
      const dayKey = `${date.getDay()}-${lesson.dayOfWeek}`;

      if (!map.has(wKey)) map.set(wKey, new Map());
      const dayMap = map.get(wKey)!;
      if (!dayMap.has(dayKey)) dayMap.set(dayKey, []);
      dayMap.get(dayKey)!.push(lesson);
    });

    return Array.from(map.entries())
      .map(([week, daysMap]) => ({
        key: week,
        start: new Date(week.split(" – ")[0].replace(" нояб.", "-11-").replace(" дек.", "-12-")),
        days: Array.from(daysMap.entries()).map(([dayKey, lessons]) => ({
          order: parseInt(dayKey.split("-")[0]),
          name: dayKey.split("-")[1],
          lessons,
        })).sort((a, b) => a.order - b.order),
      }))
      .sort((a, b) => a.start.getTime() - b.start.getTime());
  }, []);

  // Auto-expand current week
  useEffect(() => {
    const currentWeek = weekKey(today);
    setExpandedWeek(currentWeek);
  }, []);

  // Определяем, идёт ли сейчас эта пара
  const isOngoing = (lesson: Lesson): boolean => {
    if (!isSameDay(new Date(lesson.date), today)) return false;
    const [startStr, endStr] = lesson.time.split("-");
    const startMins = parseTime(lesson.time);
    const [eh, em] = endStr.split(":").map(Number);
    const endMins = eh * 60 + em;
    return nowMinutes >= startMins && nowMinutes < endMins;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 transition-colors duration-300 dark:from-gray-900 dark:to-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-4xl px-4 pb-24 pt-6">
        {/* Header */}
        <header className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <h1 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent dark:from-indigo-400 dark:to-purple-400">
              📅 Расписание К2И1(9)
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              17 ноября – 6 декабря 2025
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-sm dark:bg-gray-800/70 dark:text-gray-300">
              {today.toLocaleDateString("ru-RU", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Weeks */}
        <div className="space-y-6">
          {weeks.map((week) => {
            const isCurrentWeek = isSameWeek(today, week.start);
            return (
              <WeekBlock
                key={week.key}
                title={week.key}
                days={week.days}
                isCurrentWeek={isCurrentWeek}
                expanded={expandedWeek === week.key}
                onToggle={() =>
                  setExpandedWeek(expandedWeek === week.key ? null : week.key)
                }
                today={today}
                isOngoing={isOngoing}
              />
            );
          })}
        </div>

        <footer className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>К2И1(9) • Информационные системы и программирование</p>
          <p className="mt-1 flex items-center justify-center gap-1">
            <span>📱 Установите как PWA для уведомлений</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </p>
        </footer>
      </div>
    </div>
  );
}

// ——— WeekBlock ———
function WeekBlock({
  title,
  days,
  isCurrentWeek,
  expanded,
  onToggle,
  today,
  isOngoing,
}: {
  title: string;
  days: { name: string; lessons: Lesson[] }[];
  isCurrentWeek: boolean;
  expanded: boolean;
  onToggle: () => void;
  today: Date;
  isOngoing: (lesson: Lesson) => boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border shadow-lg transition-all duration-500 dark:border-gray-700 ${
        isCurrentWeek
          ? "border-indigo-400/50 bg-white/70 dark:bg-gray-800/70"
          : "border-gray-200 bg-white/80 dark:border-gray-800 dark:bg-gray-800/50"
      } backdrop-blur-sm`}
    >
      <button
        type="button"
        onClick={onToggle}
        className={`flex w-full items-center justify-between p-5 text-left transition-colors duration-300 ${
          isCurrentWeek
            ? "bg-gradient-to-r from-indigo-50/60 to-purple-50/30 dark:from-indigo-900/30 dark:to-purple-900/20"
            : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
        }`}
      >
        <div>
          <h2 className="flex items-baseline gap-2 font-bold text-gray-900 dark:text-white">
            <span className="text-lg">📆 Неделя</span>
            <span className="text-base font-normal text-gray-600 dark:text-gray-300">
              {title}
            </span>
            {isCurrentWeek && (
              <span className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-2.5 py-0.5 text-xs font-bold text-white shadow-md">
                Сейчас
              </span>
            )}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            {days.flatMap((d) => d.lessons).length} занятий
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="divide-y dark:divide-gray-700">
            {days.map((day, idx) => {
              const isToday = day.lessons.some((l) => isSameDay(new Date(l.date), today));
              return (
                <DaySection
                  key={idx}
                  dayName={day.name}
                  lessons={day.lessons}
                  isToday={isToday}
                  isOngoing={isOngoing}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ——— DaySection ———
function DaySection({
  dayName,
  lessons,
  isToday,
  isOngoing,
}: {
  dayName: string;
  lessons: Lesson[];
  isToday: boolean;
  isOngoing: (lesson: Lesson) => boolean;
}) {
  return (
    <div className="p-5">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-gray-800 dark:text-gray-100">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-bold text-white shadow-md">
          {dayName[0]}
        </span>
        {dayName}
        {isToday && (
          <span className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 text-xs font-bold text-white shadow-md">
            Сегодня
          </span>
        )}
      </h3>

      <div className="space-y-4">
        {lessons.map((lesson, i) => {
          const ongoing = isOngoing(lesson);
          return (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:shadow-md ${
                ongoing
                  ? "border-rose-400 bg-gradient-to-br from-rose-50 to-amber-50 dark:from-rose-900/20 dark:to-amber-900/20"
                  : "border-gray-200 bg-white/60 dark:border-gray-700 dark:bg-gray-800/50"
              }`}
            >
              {ongoing && (
                <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
                  ●
                </div>
              )}
              <div className="flex items-start gap-4">
                {/* Time */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl font-mono text-sm font-bold ${
                      ongoing
                        ? "bg-rose-500 text-white"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {lesson.time.split("-")[0]}
                  </div>
                  <div className="mt-1 h-6 w-0.5 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                        lesson.type === "ЛЕК"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200"
                          : lesson.type === "лаб."
                          ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200"
                          : lesson.type === "пр."
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200"
                          : "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200"
                      }`}
                    >
                      <LessonIcon type={lesson.type} />
                      {lesson.type}
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {lesson.subject}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {lesson.teacher}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {lesson.room}
                    </span>
                    {ongoing && (
                      <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-bold text-rose-700 dark:bg-rose-900/40 dark:text-rose-300">
                        Идёт сейчас
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}