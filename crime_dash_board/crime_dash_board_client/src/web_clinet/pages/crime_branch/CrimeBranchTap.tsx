import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TotalCrimeReport from './tab/TotalCrimeReport';
import MainCrimeReport from './tab/MainCrimeReport';

function CrimeBranchTap() {
  return (
    <Tabs
      defaultActiveKey="total"
      className="mb-3"
      style={{marginTop : "10px"}}
    >
      <Tab eventKey="total" title="총계" defaultChecked={true} style={{ width : "calc(100%)"}}>
        <TotalCrimeReport />
      </Tab>
      <Tab eventKey="main" title="대분류">
        <MainCrimeReport />
      </Tab>
      <Tab eventKey="sub" title="소분류">
        Tab content for sub
      </Tab>
    </Tabs>
  );
}

export default CrimeBranchTap;