import { Module } from "../Modules";

export interface Course {
    id: number;
    name: string;
    description: string;
    duration: number;
    image: string;
    startDate: string;
    endDate: string;
    enabled: boolean;
    modules?: Module[]
}