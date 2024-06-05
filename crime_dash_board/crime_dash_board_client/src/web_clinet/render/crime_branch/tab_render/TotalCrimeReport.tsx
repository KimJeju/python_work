import styled from "styled-components"
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
        padding : "15px",
        display : "flex",
        flexDirection: "column",
        backgroundColor : "red"
    },
    data_title : {
        fontSize : "2.2rem"
    },
    total_avg_container : {
        display : "flex",
        justifyContent : "space-between"
    }
};
});


const ChartContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`

const LeftChartWrapper = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 2vh;
    margin-right : 1vw;
`

const RightChartWrapper = styled.div`
    display : flex;
    flex-direction : column;


    margin-top : 2vh;
    margin-left : 1vw;

`

export type BindingDataType = {
    avg_title: string;
    data: string
}

export default function TotalCrimeReport() {

    const data = useRecoilValueLoadable(fetchCrimeBranchState);
    const {classes} = useStyles();

    if (data.state != "hasValue") {
        return;
    }

    const data_title: string = '총 계'

    return (
        <Grid container xs={12} spacing={2} className={classes.root} >
            <Typography className={classes.data_title}>{data_title}</Typography>
            <Grid container spacing={2} className={classes.total_avg_container}>
                {
                    Object.entries(data.contents.average['총 계']).map((el, index) => (
                        <SingDataBox key={index} data={el[1] as string} avg_title={el[0]} />
                    ))
                }
            </Grid>

            <ChartContainer>
                <LeftChartWrapper>
                    <AverageSubjectPieChart />
                    <ToTalCrimeBarCharts data={data} />
                </LeftChartWrapper>

                <RightChartWrapper>
                    <SwarmPlotChart />
                    <DynamicSubjectLineChart />
                </RightChartWrapper>
            </ChartContainer>
        </Grid>
    )
}

