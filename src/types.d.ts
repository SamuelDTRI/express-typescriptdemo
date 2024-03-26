export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface diaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

// export type NonSensitiveInfoDiaryEntry = Pick<
//   diaryEntry,
//   "id" | "date" | "weather" | "visibility" // pirmer tipo de utilidad que se recomineda para la infromacion de tipos y la menor cantidad de los mismos posible.
// >;

export type NonSensitiveInfoDiaryEntry = Omit<diaryEntry, "comment">;

interface SpecialyDiaryEntry extends diaryEntry {
  //mas recomendado
  flightNumber: number;
}

type SpecialyDiary2 = diaryEntry & {
  // esta opcion no tanto
  flightNumber: number;
};
