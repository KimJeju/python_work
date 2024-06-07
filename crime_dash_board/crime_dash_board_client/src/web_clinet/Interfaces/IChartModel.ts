
export interface IMainChartData {
    ViolentCrime: number[];
    CriminalMastermind: number[];
    ForceCrime: number[];
    MoralCrime: number[];
}

export interface IPieChartData {
    AverageSubject : number[];
}

export interface ILineChartData {
    [key : string] : number[];
}

export interface ISwarmPlotData {
    "name" : string;
    "value" : number;
}

export interface ISwarmPlotDataList {
    "children" : ISwarmPlotData[];
}


export interface IDictData {
    [key : string ]:number;
}

