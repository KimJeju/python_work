import { Loadable } from "recoil"
// import { BarChart } from '@mui/x-charts/BarChart';


export default function BarChart({ data }: { data: Loadable<any> }) {

    const average = data.contents.average;

    return (
        <>
            {/* <BarChart
                // x={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                // series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                // width={500}
                // height={300}
            /> */}
        </>
    )
}