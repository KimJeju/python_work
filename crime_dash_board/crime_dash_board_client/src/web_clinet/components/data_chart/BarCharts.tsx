import { Loadable } from "recoil"
import { BarChart } from '@mui/x-charts/BarChart';
import { IChartData } from "../../Interfaces/IChartData";
import { ChartDataToArray } from "../../utils/ChartDataUtil";

import styled from "styled-components";

const ChartContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width : calc(50%);

    display : flex;
    align-items : center;

    border-radius : 1rem;
`

export default function ToTalCrimeBarCharts({ data }: { data: Loadable<any> }) {

    const average = data.contents.average;

    const ChartData: IChartData = {
        ViolentCrime: ChartDataToArray(average["강력범죄 (소계)"]),
        CriminalMastermind: ChartDataToArray(average["지능범죄 (소계)"]),
        ForceCrime: ChartDataToArray(average["폭력범죄 (소계)"]),
        MoralCrime: ChartDataToArray(average["풍속범죄 (소계)"])

    }

    return (
        <ChartContainer>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['발생 건수', '검거 건수', '발생대비 검거건수(%)', '검거인원']}]}
                series={[
                    { data: ChartData.ViolentCrime,  label:"강력 범죄 (소계)"},
                    { data: ChartData.CriminalMastermind,label: '지능 범죄 (소계)' },
                    { data: ChartData.ForceCrime, label:'폭력 범죄 (소계)' },
                    { data: ChartData.MoralCrime, label: '풍속 범죄 (소계)' },
                ]}
                width={850}
                height={500}
                layout="vertical"
            />
        </ChartContainer>
    )
}