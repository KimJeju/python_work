import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil"
import SingDataBox from "../../../components/SingleDataBox";
import ToTalCrimeBarCharts from "../../../components/data_chart/ToTalCrimeBarCharts";
import AverageSubjectPieChart from "../../../components/data_chart/AverageSubjectPieChart";
import DynamicSubjectLineChart from "../../../components/data_chart/DynamicSubjectLineChart";
import SwarmPlotChart from "../../../components/data_chart/SwarmPlotChart";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { arrestAverageState, occurrencesAverageState } from "../../../state/crime_branch/SubjectAverageState";
import { dynamicSubCategoryState, dynamicSubjectState } from "../../../state/crime_branch/DynamicSubjectState";
import { useMemo } from "react";
import { default_data_on_load, get_average_subject_data, get_dynamic_subject_data, total_crime_branch_data } from "../../../contexts/context/CrimeBranchContext";
import { totalCrimebranchState } from "../../../state/crime_branch/CrimeBranchState";
import { IArgumentType } from "../../../Interfaces/IPropsModel";

const useStyles = makeStyles()(() => {
    return {
        root: {
            padding: "15px",
            display: "flex",
            flexDirection: "column",
        },
        data_title: {
            fontSize: "2.2rem",
            marginBottom: "1vh"
        },
        total_avg_container: {
            display: "flex",
            justifyContent: "space-between"
        },
        chart_container: {
            display: "flex",
            flexDirection: "row",
            marginTop: "2vh",
        },
        left_chart_container: {
            display: "flex",
            justifyContent: "space-between",
        },
        right_chart_container: {
            display: "flex",
            marginLeft: "1vw",
        }
    };
});

export type BindingDataType = {
    avg_title: string;
    data: string
};

export default function TotalCrimeReport() {


    const { classes } = useStyles();

    const data_title: string = '총 계'

    const [totalData, setTotalData] = useRecoilState(totalCrimebranchState);
    const [avgOccurrencesData, setAvgOccurencesData] = useRecoilState(occurrencesAverageState);
    const [avgArrestData, setAvgArrestData] = useRecoilState(arrestAverageState);
    const [mainCrimeData, setMainCrimeData] = useRecoilState(dynamicSubjectState)
    const [subCrimeData, setSubCrimeData] = useRecoilState(dynamicSubCategoryState);
    // const [subCategoryData, setSubCategoryData] = useRecoilState(dynamicSubCategoryState);

    useMemo(() => {
        async function get_all_default_data() {
            const default_data = await default_data_on_load();
            if (default_data != undefined) {
                setTotalData({
                    average: default_data[0].average,
                    main: default_data[0].main,
                    sub: default_data[0].sub
                })
                setMainCrimeData(default_data[1]);
                setSubCrimeData(default_data[2]);
                setAvgOccurencesData(default_data[3]);
                setAvgArrestData(default_data[4]);
            }
        }
        get_all_default_data();
    }, [])

    const occucrrences_args : IArgumentType = {
        key : "대분류 범죄 발생건수 (건)",
        args : useRecoilValue(occurrencesAverageState)
    } 

    const arrest_args : IArgumentType = {
        key : "대분류 범죄 검거건수 (건)",
        args : useRecoilValue(arrestAverageState)
    } 

  

    if (totalData.average == undefined || totalData.average == null) {
        return <></>
    } else {
        return (
            <Grid container xs={12} spacing={2} className={classes.root} >
                <Typography className={classes.data_title}>{data_title}</Typography>
                <Grid container spacing={2} className={classes.total_avg_container}>
                    {
                        Object.entries(totalData.average["총 계"]).map((el, index) => (
                            <SingDataBox key={index} data={el[1] as string} avg_title={el[0]} />
                        ))
                    }
                </Grid>

                <Grid xs={12} className={classes.chart_container}>
                    <Grid container className={classes.left_chart_container}>
                        <AverageSubjectPieChart data={occucrrences_args}/>
                        <AverageSubjectPieChart data={arrest_args}/>
                        <ToTalCrimeBarCharts data={totalData} />
                    </Grid>

                    <Grid container className={classes.right_chart_container}>
                        <SwarmPlotChart />
                        <DynamicSubjectLineChart />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}


