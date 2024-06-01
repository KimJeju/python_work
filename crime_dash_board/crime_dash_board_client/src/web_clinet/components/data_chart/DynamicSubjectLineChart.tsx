import { useRecoilValue } from "recoil"
import { dynamicSubjectState } from "../../state/crime_branch/DynamicSubjectState"
import { ILineChartData } from "../../Interfaces/IChartModel";
import { chart_data_columns_to_array, chart_data_to_array } from "../../utils/ChartDataUtil";
import { LineChart } from "@mui/x-charts";


export default function DynamicSubjectLineChart(){

    const data = useRecoilValue(dynamicSubjectState);

    const column = chart_data_columns_to_array(data);

    console.log(column);

    const line_data : ILineChartData = {
        DynamicSubject : chart_data_to_array(data)
    }

    return(
    <div>
        {/* <p>{column[0]}</p> */}
        {/* <LineChart 
        
        /> */}
    </div>)
}