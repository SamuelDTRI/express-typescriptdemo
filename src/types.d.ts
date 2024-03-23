export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface diaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

interface SpecialyDiaryEntry extends diaryEntry {
  //mas recomendado
  flightNumber: number;
}

type SpecialyDiary2 = diaryEntry & {
  // esta opcion no tanto
  flightNumber: number;
};
