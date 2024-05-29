import styled from "styled-components"
import { useRecoilValueLoadable } from "recoil"
import { fetchCrimeBranchState } from "../../../state/Atoms/CrimeBranchAtoms"
import SingDataBox from "../../../components/SingleDataBox";
import BarChart from "../../../components/\bdata_chart/BarChart";

const Container = styled.div`
    padding : 1%;
    height : calc(25vh);

    display :flex;
    flex-direction : column;

    background-color : blue;
`

const TotalContent = styled.div`
    height : calc(30vh);

    display :flex;
    justify-content : space-between;
`

const BarContent = styled.div`

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
        <Container>
            <DataTitle>{data_title}</DataTitle>
            <TotalContent>
                {
                    Object.entries(data.contents.average['총 계']).map((el, index) => (
                        <SingDataBox key={index} data={el[1] as string} avg_title={el[0]} />
                    ))
                }
            </TotalContent>

            <BarContent>
                <BarChart data={data}/>
            </BarContent>
        </Container>
    )
}

