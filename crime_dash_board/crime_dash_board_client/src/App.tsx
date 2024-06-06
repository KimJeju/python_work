import { useMemo } from 'react'
import './App.css'
import SideNav from './web_clinet/globals/SideNav'
import CrimeBranch from './web_clinet/render/crime_branch/CrimeBranch'
import { get_average_subject_data, get_dynamic_subject_data } from './web_clinet/contexts/context/CrimeBranchContext'
import { useRecoilState } from 'recoil'
import { subjectAverageState } from './web_clinet/state/crime_branch/SubjectAverageState'
import { dynamicSubCategoryState, dynamicSubjectState } from './web_clinet/state/crime_branch/DynamicSubjectState'

export function App() {

  const [avgData, setAvgData] = useRecoilState(subjectAverageState);
  const [dynamicSubjectData, setDynamicSubjectData] = useRecoilState(dynamicSubjectState);
  const [subCategoryData, setSubCategoryData ] =useRecoilState(dynamicSubCategoryState);

  useMemo(() => {
    async function async_get_average_subject_data() {
        setAvgData(await get_average_subject_data())
    }

    async function async_get_dynamic_subject_data() {
      setDynamicSubjectData(await get_dynamic_subject_data("2024", 1,"main","발생건수"))
    }

    async function async_get_dynamic_sub_category_data() {
      setSubCategoryData(await get_dynamic_subject_data("2024",1,"sub", "발생건수"))
    }

    async_get_average_subject_data();
    async_get_dynamic_subject_data();
    async_get_dynamic_sub_category_data();
  }, [])

  return (
    <>
      <SideNav />
      <CrimeBranch />
    </>
  )
}

export default App
