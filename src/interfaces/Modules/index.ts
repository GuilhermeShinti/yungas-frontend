import { Class } from "../Class";

export interface Module {
    id: number;
    name: string;
    image: string;
    description: string;
    status: boolean;
    classes: Class[]    
}