import styled from "styled-components";
import { useRecoilValue } from "recoil"
import { dynamicSubjectState } from "../../state/crime_branch/DynamicSubjectState"
import { ILineChartData } from "../../Interfaces/IChartModel";
import { chart_data_columns_to_array, chart_data_to_array } from "../../utils/ChartDataUtil";
import { LineChart } from "@mui/x-charts";


const ChartContainer = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius : 1rem;
    transition : 0.2s;

    padding : 2vh;

    &:hover {
        background-color : white;

        box-shadow: rgba(0, 0, 0, 0.24) 3px 6px 16px;

    }
`

export default function DynamicSubjectLineChart() {

    const data = useRecoilValue(dynamicSubjectState);

    const line_data: ILineChartData = {
        DynamicSubjectColums: chart_data_columns_to_array(data),
        DynamicSubject: chart_data_to_array(data)
    }

    console.log(line_data.DynamicSubjectColums);

    return (
        <ChartContainer>
            <LineChart
                xAxis={[{ scaleType: 'point', data: line_data.DynamicSubjectColums }]}
                series={[
                    {
                        label: '주제별 범죄발생 통계 (건)',
                        area: true,
                        showMark: false,
                        data: line_data.DynamicSubject,
                    },
                ]}
                width={850}
                height={500}
            />
        </ChartContainer>)
}