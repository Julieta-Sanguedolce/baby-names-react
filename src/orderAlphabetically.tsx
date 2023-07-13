import { BabyNames } from "./data/babyNamesType";


export function orderAlphabetically(inputArray: BabyNames[]){
    const orderedExampleNames = inputArray.sort((a, b) => a.name.localeCompare(b.name));
    return orderedExampleNames;
}