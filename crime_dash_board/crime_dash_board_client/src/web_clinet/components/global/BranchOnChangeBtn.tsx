import { Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { comboboxState } from "../../state/global/ComboBoxState";
import { totalCrimebranchState } from "../../state/crime_branch/CrimeBranchState";
import { dynamicSubCategoryState } from "../../state/crime_branch/DynamicSubjectState";
import { arrestAverageState, occurrencesAverageState } from "../../state/crime_branch/SubjectAverageState";
import { seleted_data_on_load } from "../../contexts/CrimeBranchContext";



export default function BranchOnChangeBtn() {

    const comboBoxKey = "selected_key"
    const seletetedComboboxValue = useRecoilValue(comboboxState(comboBoxKey));

    const [totalData, setTotalData] = useRecoilState(totalCrimebranchState);
    const [subCrimeData, setSubCrimeData] = useRecoilState(dynamicSubCategoryState);
    const [avgOccurrencesData, setAvgOccurencesData] = useRecoilState(occurrencesAverageState);
    const [avgArrestData, setAvgArrestData] = useRecoilState(arrestAverageState);

    async function onChangeCrimeBranch() {
        try {
            const seleted_data = await seleted_data_on_load(seletetedComboboxValue.year.toString(), seletetedComboboxValue.branch);

            console.log(seleted_data);
            if (seleted_data != undefined) {
                setTotalData({
                    average: seleted_data[0].average,
                    main: seleted_data[0].main,
                    sub: seleted_data[0].sub
                })
                setSubCrimeData(seleted_data[1]);
                setAvgOccurencesData(seleted_data[2]);
                setAvgArrestData(seleted_data[3]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Button variant="contained" style={{ width : "calc(25%)"}}
            onClick={() => {
                onChangeCrimeBranch();
            }}>검색</Button>
    )
}