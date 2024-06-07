import { useRecoilValue } from "recoil"
import { makeStyles } from "tss-react/mui";
import { Grid, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { chart_data_columns_to_array, chart_data_to_array, line_chart_data_slice, main_line_chart_data_slice } from "../../../utils/ChartDataUtil";
import { ICandlestickData, ICandlestickDataList, ILineChartData, IMainChartData } from "../../../interfaces/IChartModel";
import { mainPassedTotalSubjectState } from "../../../state/crime_branch/main/MainDataState";


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

export default function MainSubjectLineChart() {

    const { classes } = useStyles();
    const data = useRecoilValue(mainPassedTotalSubjectState);

    const using_subject = data as any
    // const column_list = chart_data_columns_to_array(using_subject);
    // const candle_data_list: ICandlestickDataList = {
    //     data: []
    // }

    // const array_num : number[] = [];

    // Object.entries(data).map((el, index) => {
    //     Object.values(el[1]).forEach((int_el) => {
    //         array_num.push(int_el as number);
    //         const candle_data: ICandlestickData = {
    //             x: el[0],
    //             y: array_num
    //         }
    //         candle_data_list.data.push(candle_data)
    //     })
    // });

    // console.log(candle_data_list);
    // console.log(line_data_list);

    // const chart_data: IMainChartData = {
    //     ViolentCrime: ,
    //     ForceCrime: line_chart_data_slice(line_data_list, 1),
    //     CriminalMastermind: line_chart_data_slice(line_data_list, 2),
    //     MoralCrime: line_chart_data_slice(line_data_list, 3),
    // }
    return (
        <Grid xs={16} className={classes.root}>
            <Typography>2023 대분류 범죄발생 추이</Typography>
            {/* <LineChart
                width={800}
                height={500}
                series={[
                    { data: chart_data.ViolentCrime, label: '강력범죄', yAxisKey: 'leftAxisId' },
                    { data: chart_data.ForceCrime, label: '폭력범죄', yAxisKey: 'rightAxisId' },
                    { data: chart_data.CriminalMastermind, label: '지능범죄', yAxisKey: 'rightAxisId' },
                    { data: chart_data.MoralCrime, label: '풍속범죄', yAxisKey: 'rightAxisId' },

                ]}
                xAxis={[{ scaleType: 'point', data: column_list }]}
                yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
                rightAxis="rightAxisId"
            /> */}
        </Grid>)
}