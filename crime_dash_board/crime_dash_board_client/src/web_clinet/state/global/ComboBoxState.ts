import { atom, atomFamily } from "recoil";
import { ICrimeBranchSelected } from "../../Interfaces/IChartModel";


export const comboboxState = atomFamily<ICrimeBranchSelected, string>({
    key : "combo_box_seleted",
    default : (key : string) => 
        atom<ICrimeBranchSelected>({
            key : "key",
            default : {
                label : "",
                branch : 1,
                year : 2024
            },
        })
})