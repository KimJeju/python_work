import styled from "styled-components"
import { useRecoilValueLoadable } from "recoil"
import { fetchCrimeBranchState } from "../../../state/crime_branch/CrimeBranchState"
import SingDataBox from "../../../components/SingleDataBox";
import ToTalCrimeBarCharts from "../../../components/\bdata_chart/ToTalCrimeBarCharts";
import AverageSubjectPieChart from "../../../components/\bdata_chart/AverageSubjectPieChart";
import { useEffect, useMemo } from "react";
import { get_average_subject_data } from "../../../contexts/CrimeBranchContext";

const Wrapper = styled.div`
    padding : 1%;
    height : calc(100vh);

    // background-color : blue;

    display :flex;
    flex-direction : column;
`

const ChartWrapper = styled.div`
    height : calc(100%);
    margin-top : 2vh;
    // background-color : grey;
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

            <ChartWrapper>
                <AverageSubjectPieChart />
                <ToTalCrimeBarCharts data={data} />
            </ChartWrapper>
        </Wrapper>
    )
}

