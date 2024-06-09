import { atom, atomFamily } from "recoil";
import { ICrimeBranchMainTransitionSeleted, ICrimeBranchSelected } from "../../interfaces/ISelectBoxModel";


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


export const total_branch_state = atomFamily<ICrimeBranchSelected,string>({
    key : "total_branch_selector",
    default : (key : string) => 
        atom<ICrimeBranchSelected>({
            key : "total_branch_key",
            default : {
                label : "",
                year : 2024,
                branch : 1,
            },
    })
})