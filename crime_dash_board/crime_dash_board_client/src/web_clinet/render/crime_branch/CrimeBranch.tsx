import styled from "styled-components";

import CrimeBranchTap from "./CrimeBranchTap";
import { get_average_subject_data } from "../../contexts/CrimeBranchContext";
import { useMemo } from "react";

const Container = styled.div`
 width : calc(100% - 5vw);
 height : 100vh;
//  background-color : red;
 
 margin : 4%;
`


export default function CrimeBranch() {
    

    return (
        <>
            <Container>
                <h5>2024 1분기 전국 범죄발생 통계</h5>
                <CrimeBranchTap />
            </Container>
        </>
    )
}


