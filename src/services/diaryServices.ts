import { NonSensitiveInfoDiaryEntry, diaryEntry } from "../types";
import diaryData from "./diaries";
// typescriptprimero busca las extensiones de esta manera ".tsx", ".ts", ".node" ".js" ".json";

const diaries: diaryEntry[] = diaryData as diaryEntry[]; // Asercion de tipos recordar y repasar

export const getEntries = () => diaries;

// export const findById =

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map((entry) => ({
      id: entry.id,
      date: entry.date,
      weather: entry.weather,
      visibility: entry.visibility,
    }));
  }; //utility types

export const addEntry = () => null;
