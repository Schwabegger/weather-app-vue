import { TemperatureScale } from "../TemperatureScale";

export type WeatherLitItem = {
    icon: HTMLImageElement;
    day: string;
    tempmin: number;
    tempmax: number;
    unit: TemperatureScale;
}