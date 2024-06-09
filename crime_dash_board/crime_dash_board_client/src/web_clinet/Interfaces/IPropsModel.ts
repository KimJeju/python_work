import { ICrimeBranchMainTransitionSeleted , ICrimeBranchSelected } from "./ISelectBoxModel"

export type IArrayPropsType = Array<ICrimeBranchSelected |  ICrimeBranchMainTransitionSeleted | number | string>

export type IArrayProps<T> = {
    args : T,
} 

export type IArgumentType = {
    key : string,
    args : any
}