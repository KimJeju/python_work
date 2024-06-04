import styled from "styled-components";

import CrimeBranchTap from "./CrimeBranchTap";
import SideNav from "../../globals/SideNav";
import { crimeBranch_combo_select } from "../../constants/CrimeBranch";
import { ComboBox } from "../../components/ComboBox";

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
                <SideNav />
                <ComboBox  args={crimeBranch_combo_select} />
                <CrimeBranchTap />
            </Container>
        </>
    )
}


