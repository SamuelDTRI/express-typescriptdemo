import { diaryEntry } from "../types";
import diaryData from "./diaries";

const diaries: Array<diaryEntry> = diaryData as Array<diaryEntry>; // Asercion de tipos recordar y repasar

export const getEntries = () => diaries;

export const addEntry = () => null;
