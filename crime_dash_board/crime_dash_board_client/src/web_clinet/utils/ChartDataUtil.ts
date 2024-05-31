

export function chart_data_to_array(data: object): Array<number> {

    const result_data: number[] = [];

    Object.entries(data).map((value, index) => {
            const int_value = Number.parseInt(value[1])
            result_data.push(int_value)
        
    })

    return result_data;
}

export function chart_data_columns_to_array(data:object){

    const result_data : string[] = [];

    Object.keys(data).forEach(el => {
        result_data.push(el);
    })

    return result_data;
}

export function slice_total_avg_data(data:number[]) : [number[], number[]]{
    let iter = 0;

    const main_data : number[] = [];
    const sub_data : number[] = [];


    data.forEach(el => {
        if(iter % 2 == 0){
            main_data.push(data[iter]);
        }else {
            sub_data.push(data[iter]);
        }
        ++iter;
    })

    return [main_data, sub_data]
}