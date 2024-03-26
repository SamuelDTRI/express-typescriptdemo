import { diaryEntry } from "../types";
import diaryData from "./diaries";
// typescriptprimero busca las extensiones de esta manera ".tsx", ".ts", ".node" ".js" ".json";

const diaries: Array<diaryEntry> = diaryData as Array<diaryEntry>; // Asercion de tipos recordar y repasar

export const getEntries = () => diaries;

export const addEntry = () => null;
