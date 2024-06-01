import { useMemo, useState } from 'react'
import './App.css'
import SideNav from './web_clinet/globals/SideNav'
import CrimeBranch from './web_clinet/render/crime_branch/CrimeBranch'
import { get_average_subject_data } from './web_clinet/contexts/CrimeBranchContext'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { subjectAverageState } from './web_clinet/state/crime_branch/SubjectAverageState'

export function App() {

  const [avgData, setAvgData] = useRecoilState(subjectAverageState);

  useMemo(() => {
    async function get_async_data() {
        setAvgData(await get_average_subject_data())
    }
    get_async_data();
  }, [])

  return (
    <>
      <SideNav />
      <CrimeBranch />
    </>
  )
}

export default App
