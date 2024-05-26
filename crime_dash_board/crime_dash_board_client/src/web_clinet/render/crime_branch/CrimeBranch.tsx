import SideNav from "../../globals/SideNav";
import styled from "styled-components";

import { useRecoilValueLoadable } from "recoil";
import { fetchCrimeBranchState } from "../../state/Atoms/CrimeBranchAtoms";
import CrimeBranchTap from "./CrimeBranchTap";

const Container = styled.div`
 width : calc(100% - 5vw);
 height : 100vh;
 background-color : red;
 
 margin : 4%;
`

export default function CrimeBranch() {
    //비동기적으로 데이터 가져오기
    const data = useRecoilValueLoadable(fetchCrimeBranchState);

    return (
        <>
            <SideNav />
            <Container>
                <h2>2024 1분기 전국 범죄발생 통계</h2>
                <CrimeBranchTap />
            </Container>
        </>
    )
}


