export type CommonSeleted = {
    label : string
}

export interface ICrimeBranchSelected extends CommonSeleted{
    year : number,
    branch : number
}

export interface ICrimeBranchMainPassedSeleted extends CommonSeleted{
    category : string,
    subject : string,
}

