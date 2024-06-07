import { IArgumentType } from "../../../interfaces/IPropsModel";

import { makeStyles } from "tss-react/mui";
const useStyle = makeStyles()(() => {
    return {
        root: {
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "1rem",
            transition: "0.2s",
            paddingLeft : "1vw",
            "&:hover": {
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",

            }
        },
    }
})


export function MainAreaChart({ data }: { data: IArgumentType }) {
    
    const { classes } = useStyle()
    // const data_set = get_tree_map_data_set(data.args);

    console.log(data.args);


    
    return (
        <div className={classes.root}>
            {/* <ApexCharts
                type="area"
                series={[
                    {
                        data: data_set.data
                    }
                ]}
                options={{
                    chart: {
                        type: 'area',
                        height: 350,
                        zoom: {
                          enabled: false
                        }
                      },
                      dataLabels: {
                        enabled: false
                      },
                      stroke: {
                        curve: 'straight'
                      },
                      
                      title: {
                        text: 'Fundamental Analysis of Stocks',
                        align: 'left'
                      },
                      subtitle: {
                        text: 'Price Movements',
                        align: 'left'
                      },
                    //   labels: data_set.data,
                    //   xaxis: {
                    //     type: 'number',
                    //   },
                      yaxis: {
                        opposite: true
                      },
                      legend: {
                        horizontalAlign: 'left'
                      }
                }}>
            </ApexCharts> */}
        </div>
    );
}