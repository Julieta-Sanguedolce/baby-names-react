import { BabyNames } from "./data/babyNamesType";
import "./App.css"


interface Props {
    namesArray: BabyNames[],
    nameToFilter: string,
}

export function ListOfNames({namesArray, nameToFilter}:Props):JSX.Element {
    const filter = nameToFilter;
    const filteredArray = namesArray.filter(ele => ele.name.includes(filter));
    return (
        <div>
            {filteredArray.map((el) => <button className={el.sex} key={el.id}>{el.name}</button>)}
        </div>
    )

}

