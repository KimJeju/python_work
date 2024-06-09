import { atom, atomFamily } from "recoil";
import { ICrimeBranchMainTransitionSeleted, ICrimeBranchSelected } from "../../interfaces/ISelectBoxModel";


export const total_select_state = atomFamily<ICrimeBranchSelected, string>({
    key : "total_selector",
    default : (key : string) => 
        atom<ICrimeBranchSelected>({
            key : "total_selector_key",
            default : {
                label : "",
                branch : 1,
                year : 2024
            },
        })
})

export const main_transition_state = atomFamily<ICrimeBranchMainTransitionSeleted,string>({
    key : "main_transition_selector",
    default : (key : string) => 
        atom<ICrimeBranchMainTransitionSeleted>({
            key : "transition_key",
            default : {
                label : "절도범죄",
                category : "절도범죄",
                subject : "2023"
            },
    })
})