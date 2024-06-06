import { atom } from "recoil";
import { ITotalData } from "../../Interfaces/ICrimeBranchModel";

export const totalCrimebranchState = atom<object | any>({
    key : "crime_branch",
    default : []
})

