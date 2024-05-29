

export function ChartDataToArray(data : object) : Array<number>{

    const resultData : number[] = [];

    Object.entries(data).map((value, index) => {   
       
        if(value[1] != "대분류 별 소계" &&  value[0].toString() != "법인체"){
            const replaceStr = value[1] as string;
            resultData.push(+replaceStr.toString().replace(",",""))
        }
    })

    return resultData;
}