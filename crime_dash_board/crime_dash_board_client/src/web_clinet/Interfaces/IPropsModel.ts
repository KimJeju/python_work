import { ICrimeBranchSelect } from "./IChartModel";

export type IArrayPropsType = Array<ICrimeBranchSelect | number | string>

export type IArrayProps<T> = {
    args : T
} 