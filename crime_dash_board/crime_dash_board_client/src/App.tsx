import { useMemo } from 'react'
import './App.css'
import SideNav from './web_clinet/globals/SideNav'
import CrimeBranch from './web_clinet/render/crime_branch/CrimeBranch'
import { get_average_subject_data, get_dynamic_subject_data } from './web_clinet/contexts/context/CrimeBranchContext'
import { useRecoilState } from 'recoil'
import { subjectAverageState } from './web_clinet/state/crime_branch/SubjectAverageState'
import { dynamicSubCategoryState, dynamicSubjectState } from './web_clinet/state/crime_branch/DynamicSubjectState'

export function App() {

  return (
    <>
      <SideNav />
      <CrimeBranch />
    </>
  )
}

export default App
