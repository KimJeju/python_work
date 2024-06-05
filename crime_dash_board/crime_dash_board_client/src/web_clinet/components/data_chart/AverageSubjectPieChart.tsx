
import { useRecoilValue } from "recoil"
import { subjectAverageState } from "../../state/crime_branch/SubjectAverageState"
import { IPieChartData } from "../../Interfaces/IChartModel";
import { chart_data_columns_to_array, chart_data_to_array } from "../../utils/ChartDataUtil";
import { PieChart } from "@mui/x-charts";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()(() => {
  return {
    root: {
      display : "flex",
      alignItems : "center",
      flexDirection : "column",
      height : "25vh",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      borderRadius : "1rem",
      transition : "0.2s",
      "&:hover" : {
        backgroundColor : "white",
        boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",

    }
    },
  };
});

export default function AverageSubjectPieChart() {

  const { classes } = useStyles();
  const data = useRecoilValue(subjectAverageState);

  const pie_data: IPieChartData = {
    AverageSubject: chart_data_to_array(data)
  }

  const column_array = chart_data_columns_to_array(data);

  return (
      <Grid item xs={5.7}  className={classes.root}>
      <Typography>범죄 분류별 발생건수 (건)</Typography>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: pie_data.AverageSubject[0], label: column_array[0] },
              { id: 1, value: pie_data.AverageSubject[1], label: column_array[1] },
              { id: 2, value: pie_data.AverageSubject[2], label: column_array[2] },
              { id: 3, value: pie_data.AverageSubject[3], label: column_array[3] },
            ],
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        width={400}
        height={200}
      />
    </Grid>
  )
}