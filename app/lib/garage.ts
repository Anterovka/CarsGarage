"use client";

const GARAGE_STORAGE_KEY = "car-garage";

// получение id
export function getGarage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(GARAGE_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// сохранение в localstorage
export function saveGarage(garage: string[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(GARAGE_STORAGE_KEY, JSON.stringify(garage));
    window.dispatchEvent(new CustomEvent("garage-updated", { detail: garage }));
  } catch {
  }
}

export function addToGarage(carId: string): void {
  const garage = getGarage();
  if (!garage.includes(carId)) {
    saveGarage([...garage, carId]);
  }
}

export function removeFromGarage(carId: string): void {
  const garage = getGarage();
  saveGarage(garage.filter((id) => id !== carId));
}

export function toggleGarage(carId: string): void {
  const garage = getGarage();
  if (garage.includes(carId)) {
    removeFromGarage(carId);
  } else {
    addToGarage(carId);
  }
}

export function isInGarage(carId: string): boolean {
  return getGarage().includes(carId);
}

