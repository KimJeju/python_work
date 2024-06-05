import styled from "styled-components";
import CrimeBranchTap from "./CrimeBranchTap";
import SideNav from "../../globals/SideNav";
import { crimeBranch_combo_select } from "../../constants/CrimeBranch";
import { ComboBox } from "../../components/ComboBox";
import { useRecoilValue } from "recoil";
import { comboboxState } from "../../state/global/ComboBoxState";
import { selected_branch_crime_data } from "../../contexts/CrimeBranchContext";


const Container = styled.div`
 width : calc(100% - 5vw);
 height : 100vh;
 margin : 5.5%;
`


export default function CrimeBranch() {
    
    const comboBoxKey = "selected_key"
    const seletetedComboboxValue = useRecoilValue(comboboxState(comboBoxKey));

    return (
        <>
            <Container>
                <SideNav />
                <ComboBox  args={crimeBranch_combo_select} />
                <button onClick={() => {selected_branch_crime_data(seletetedComboboxValue)}}>
                    test 
                </button>
                <CrimeBranchTap />
            </Container>
        </>
    )
}


