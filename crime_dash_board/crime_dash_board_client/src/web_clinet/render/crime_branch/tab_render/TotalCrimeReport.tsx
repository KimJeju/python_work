import { useRecoilValueLoadable } from "recoil"
import { fetchCrimeBranchState } from "../../../state/crime_branch/CrimeBranchState"
import SingDataBox from "../../../components/SingleDataBox";
import ToTalCrimeBarCharts from "../../../components/data_chart/ToTalCrimeBarCharts";
import AverageSubjectPieChart from "../../../components/data_chart/AverageSubjectPieChart";
import DynamicSubjectLineChart from "../../../components/data_chart/DynamicSubjectLineChart";
import SwarmPlotChart from "../../../components/data_chart/SwarmPlotChart";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";

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

    const branch_data = useBranchCrime();


    const data = useRecoilValueLoadable(fetchCrimeBranchState);
    const { classes } = useStyles();

    if (data.state != "hasValue") {
        return;
    }

    const data_title: string = '총 계'

    if (branch_data.isLoading == false) {
        
        const using_data = swr_data_to_key_pair_value(branch_data.data);

        console.log(using_data[0]["average"]['총 계']);

        return (
            <Grid container xs={12} spacing={2} className={classes.root} >
                <Typography className={classes.data_title}>{data_title}</Typography>
                <Grid container spacing={2} className={classes.total_avg_container}>
                    {
                        Object.entries(branch_data.data.average['총 계']).map((el, index) => (
                            <SingDataBox key={index} data={el[1] as string} avg_title={el[0]} />
                        ))
                    }
                </Grid>

                <Grid xs={12} className={classes.chart_container}>
                    <Grid container className={classes.left_chart_container}>
                        <AverageSubjectPieChart />
                        <AverageSubjectPieChart />
                        <ToTalCrimeBarCharts data={data} />
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

