import { Grid, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { makeStyles } from "tss-react/mui";
import { IArgumentType } from "../../../interfaces/IPropsModel";
import { mainDataArrestPeopleState, mainDataArrestPersentState, mainDataArrestState, mainDataOccurrenceState, mainPassedTotalSubjectState } from "../../../state/crime_branch/main/MainDataState";
import { get_crime_branch_transiiton, get_dynamic_subject_data } from "../../../contexts/CrimeBranchContext";
import { useMemo } from "react";
import MainSubjectPieChart from "../../../components/data_chart/main_crime/MainSubjectPieChart";
import { MainTreeMap } from "../../../components/data_chart/main_crime/MainTreeMap";
import MainSubjectLineChart from "../../../components/data_chart/main_crime/MainSubjectLineChart";

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
        main_tree_map_container: {
            marginTop: "3vh"
        },
    }
})


export default function MainCrimeReport() {
    const { classes } = useStyle();

    const [, setMainOccurenceData] = useRecoilState(mainDataOccurrenceState); // 중분류 범죄발생추이
    const [, setMainArrestData] = useRecoilState(mainDataArrestState); // 중분류 검거건 추이
    const [, setMainArrestPeopleData] = useRecoilState(mainDataArrestPeopleState); // 중분류 검거인원
    const [, setMainArrestPersentData] = useRecoilState(mainDataArrestPersentState); // 중분류 검거인원
    const [aaa, setMainPassedTotalSubject] = useRecoilState(mainPassedTotalSubjectState)

    useMemo(() => {
        async function get_all_main_report_data() {
            setMainOccurenceData(await get_dynamic_subject_data("2024", 1, "main", "발생건수"));
            setMainArrestData(await get_dynamic_subject_data("2024", 1, "main", "검거건수"));
            setMainArrestPeopleData(await get_dynamic_subject_data("2024", 1, "main", "검거인원"));
            setMainArrestPersentData(await get_dynamic_subject_data("2024", 1, "main", "발생대비 검거건수(%)"));
            setMainPassedTotalSubject(await get_crime_branch_transiiton("main", "발생건수"))
        }
        get_all_main_report_data();
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

    return (
        <Grid container xs={12} className={classes.root}>
            <Typography></Typography>
            <Grid item className={classes.main_pie_container}>
                <MainSubjectPieChart data={occurence_args} />
                <MainSubjectPieChart data={arrest_args} />
                <MainSubjectPieChart data={arrest_people_args} />
                {/* <MainSubjectPieChart data={occurence_args} /> */}
            </Grid>

            <Grid item xs={6} className={classes.main_tree_map_container} >
                <MainTreeMap data={arrest_persent_args} />
            </Grid>
            <Grid item xs={5} >
                <MainSubjectLineChart />
            </Grid>
        </Grid>
    )
}


