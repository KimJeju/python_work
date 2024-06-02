import styled from "styled-components"
import { useRecoilValueLoadable } from "recoil"
import { fetchCrimeBranchState } from "../../../state/crime_branch/CrimeBranchState"
import SingDataBox from "../../../components/SingleDataBox";
import ToTalCrimeBarCharts from "../../../components/data_chart/ToTalCrimeBarCharts";
import AverageSubjectPieChart from "../../../components/data_chart/AverageSubjectPieChart";
import DynamicSubjectLineChart from "../../../components/data_chart/DynamicSubjectLineChart";
import Test from "../../../components/data_chart/SwarmPlotChart";
import SwarmPlotChart from "../../../components/data_chart/SwarmPlotChart";

const Wrapper = styled.div`
    padding : 1%;

    display :flex;
    flex-direction : column;


`

const ChartContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`

const LeftChartWrapper = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 2vh;
    margin-right : 1vw;
`

const RightChartWrapper = styled.div`
    display : flex;
    flex-direction : column;


    margin-top : 2vh;
    margin-left : 1vw;

`

const TotalContent = styled.div`
    display :flex;
    justify-content : space-between;
`

const DataTitle = styled.p`
    font-size : 32px;
`

export type BindingDataType = {
    avg_title: string;
    data: string
}

export default function TotalCrimeReport() {

    const data = useRecoilValueLoadable(fetchCrimeBranchState);

    if (data.state != "hasValue") {
        return;
    }

    const data_title: string = '총 계'

    return (
        <Wrapper>
            <DataTitle>{data_title}</DataTitle>
            <TotalContent>
                {
                    Object.entries(data.contents.average['총 계']).map((el, index) => (
                        <SingDataBox key={index} data={el[1] as string} avg_title={el[0]} />
                    ))
                }
            </TotalContent>

            <ChartContainer>
                <LeftChartWrapper>
                    <AverageSubjectPieChart />
                    <ToTalCrimeBarCharts data={data} />
                </LeftChartWrapper>

                <RightChartWrapper>
                    <SwarmPlotChart />
                    <DynamicSubjectLineChart />
                </RightChartWrapper>
            </ChartContainer>
        </Wrapper>
    )
}

