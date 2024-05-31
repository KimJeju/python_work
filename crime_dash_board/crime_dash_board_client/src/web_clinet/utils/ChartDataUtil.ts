

export function ChartDataToArray(data: object): Array<number> {

    const resultData: number[] = [];

    Object.entries(data).map((value, index) => {
            const int_value = Number.parseInt(value[1])
            resultData.push(int_value)
        
    })

    return resultData;
}