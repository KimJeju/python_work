import styled from "styled-components"
import { useRecoilValueLoadable } from "recoil"
import { fetchCrimeBranchState } from "../../../state/Atoms/CrimeBranchAtoms"
import SingDataBox from "../../../components/SingleDataBox";

const Container = styled.div`
    padding : 1%;
`

export type BindingDataType = {
    name: string;
    data: unknown
}

export default function TotalCrimeReport() {

    const data = useRecoilValueLoadable(fetchCrimeBranchState);

    if (data.state != "hasValue") {
        return;
    }

    return (
        <Container>
            {
                Object.entries(data.contents.average).map((el, index) => (
                    <SingDataBox key={index} data={el[1]} name={el[0]}/> 
                ))
            }
        </Container>
    )
}

