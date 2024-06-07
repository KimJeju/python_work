import styled from "styled-components";
import { crimeBranch_combo_select } from "../../constants/CrimeBranch";
import { ComboBox } from "../../components/ComboBox";

//components
import CrimeBranchTap from "./CrimeBranchTap";
import SideNav from "../../globals/SideNav";
import BranchOnChangeBtn from "../../components/global/BranchOnChangeBtn";


const Container = styled.div`
 width : calc(100% - 5vw);
 height : 100vh;
 margin : 5%;
`

const SelectorContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    
    width : calc(25%);
`


export default function CrimeBranch() {
    return (
        <>
            <Container>
                <SideNav />
                <SelectorContainer>
                    <ComboBox args={crimeBranch_combo_select} />
                    <BranchOnChangeBtn/>
                </SelectorContainer>
                <CrimeBranchTap />
            </Container>
        </>
    )
}


