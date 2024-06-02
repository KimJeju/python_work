import { ResponsiveCirclePackingCanvas } from '@nivo/circle-packing'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { dynamicSubCategoryState } from '../../state/crime_branch/DynamicSubjectState'
import { get_swarm_chart_data_key_pair_value } from '../../utils/ChartDataUtil'
import { Typography } from '@mui/material'

const ChartContainer = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;

    height: calc(40.5%);

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius : 1rem;
    transition : 0.2s;

    padding : 0.5vw;

    &:hover {
        background-color : white;

        box-shadow: rgba(0, 0, 0, 0.24) 3px 6px 16px;

    }
`

export default function SwarmPlotChart() {

    const subCategoryData = useRecoilValue(dynamicSubCategoryState);

    const tuple_data = get_swarm_chart_data_key_pair_value(subCategoryData);

    return (
        <ChartContainer>
            <Typography>소분류 범죄 발생비율 (%)</Typography>
           <ResponsiveCirclePackingCanvas
                data={tuple_data}
                margin={{ top: 5, right: 20, bottom: 20, left: 20 }}
                id="name"
                colors={{ scheme: 'spectral' }}
                colorBy="id"
                childColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'brighter',
                            0.4
                        ]
                    ]
                }}
                padding={1}
                leavesOnly={true}
                enableLabels={true}
                label="id"
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2.4
                        ]
                    ]
                }}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.3
                        ]
                    ]
                }}
                animate={true}
            />
        </ChartContainer>
    )
}
