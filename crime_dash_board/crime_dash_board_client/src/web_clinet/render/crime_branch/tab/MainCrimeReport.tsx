import { Grid, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { makeStyles } from "tss-react/mui";
import { IArgumentType } from "../../../interfaces/IPropsModel";
import { mainDataArrestPeopleState, mainDataArrestPersentState, mainDataArrestState, mainDataOccurrenceState } from "../../../state/crime_branch/main/MainDataState";
import { get_dynamic_subject_data } from "../../../contexts/CrimeBranchContext";
import { useMemo } from "react";
import MainSubjectPieChart from "../../../components/data_chart/main_crime/MainSubjectPieChart";
import SwarmPlotChart from "../../../components/data_chart/total_crime/SwarmPlotChart";

const useStyle = makeStyles()(() => {
    return {
        root: {
            display: "flex",
            flexDirection: "row",

        },
        main_pie_container: {
            display: "flex",
            justifyContent: "space-between"
        },
    }
})


export default function MainCrimeReport() {
    const { classes } = useStyle();

    const [, setMainOccurenceData] = useRecoilState(mainDataOccurrenceState); // 중분류 범죄발생추이
    const [, setMainArrestData] = useRecoilState(mainDataArrestState); // 중분류 검거건 추이
    const [, setMainArrestPeopleData] = useRecoilState(mainDataArrestPeopleState); // 중분류 검거인원
    const [, setMainArrestPersentData] = useRecoilState(mainDataArrestPersentState); // 중분류 검거인원


    // const [, setMainLegalEntityData] = useRecoilState(mainDataLegalEntityState); // 중분류 검거건 추이


    useMemo(() => {
        async function get_all_default_data() {
            setMainOccurenceData(await get_dynamic_subject_data("2024", 1, "main", "발생건수"));
            setMainArrestData(await get_dynamic_subject_data("2024", 1, "main", "검거건수"));
            setMainArrestPeopleData(await get_dynamic_subject_data("2024", 1, "main", "검거인원"));
            setMainArrestPersentData(await get_dynamic_subject_data("2024", 1, "main", "발생대비 검거건수(%)"));

            // setMainLegalEntityData(await get_dynamic_subject_data("2024", 1, "main", "법인체"));
        }
        get_all_default_data();
    }, [])


    const occurence_args: IArgumentType = {
        key: "발생 건수 (건)",
        args: useRecoilValue(mainDataOccurrenceState)
    }

    const arrest_args: IArgumentType = {
        key: "검거 건수 (건)",
        args: useRecoilValue(mainDataArrestState)
    }

    const arrest_people_args: IArgumentType = {
        key: "검거 인원 (명)",
        args: useRecoilValue(mainDataArrestPeopleState)
    }

    const arrest_persent_args: IArgumentType = {
        key: "발생대비 검거건수(%)",
        args: useRecoilValue(mainDataArrestPersentState)
    }

    // const legal_args : IArgumentType = {
    //     key : "법인체",
    //     args : useRecoilValue(mainDataLegalEntityState)
    // }

    return (
        <Grid container xs={12} className={classes.root}>
            <Typography></Typography>
            <Grid item className={classes.main_pie_container}>
                <MainSubjectPieChart data={occurence_args} />
                <MainSubjectPieChart data={arrest_args} />
                <MainSubjectPieChart data={arrest_people_args} />
                {/* <MainSubjectPieChart data={occurence_args} /> */}
            </Grid>

            <SwarmPlotChart data={occurence_args} />
        </Grid>
    )
}


