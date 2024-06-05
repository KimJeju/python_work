import styled from "styled-components";
import { useRecoilValue } from "recoil"
import { dynamicSubjectState } from "../../state/crime_branch/DynamicSubjectState"
import { ILineChartData } from "../../Interfaces/IChartModel";
import { chart_data_columns_to_array, chart_data_to_array } from "../../utils/ChartDataUtil";
import { LineChart } from "@mui/x-charts";
import { makeStyles } from "tss-react/mui";
import { Grid } from "@mui/material";


const useStyles = makeStyles()(() => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "1rem",
            transition: "0.2s",
            "&:hover": {
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",

            }
        },
    };
});


export default function DynamicSubjectLineChart() {

    const { classes } = useStyles();
    const data = useRecoilValue(dynamicSubjectState);

    const line_data: ILineChartData = {
        DynamicSubjectColums: chart_data_columns_to_array(data),
        DynamicSubject: chart_data_to_array(data)
    }

    return (
        <Grid xs={16} className={classes.root}>
            <LineChart
                xAxis={[{ scaleType: 'point', data: line_data.DynamicSubjectColums }]}
                series={[
                    {
                        label: '주제별 범죄발생 통계 (건)',
                        area: true,
                        showMark: false,
                        data: line_data.DynamicSubject,
                    },
                ]}
                height={500}
            />
        </Grid>)
}