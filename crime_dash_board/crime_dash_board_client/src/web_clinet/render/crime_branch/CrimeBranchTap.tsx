import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TotalCrimeReport from './tab_render/TotalCrimeReport';

function CrimeBranchTap() {
  return (
    <Tabs
      defaultActiveKey="crime_branch"
      className="mb-3"
      style={{marginTop : "10px"}}
    >
      <Tab eventKey="total" title="total" defaultChecked={true} style={{ width : "100px"}}>
        <TotalCrimeReport />
      </Tab>
      <Tab eventKey="main" title="main">
        Tab content for main
      </Tab>
      <Tab eventKey="sub" title="sub">
        Tab content for sub
      </Tab>
    </Tabs>
  );
}

export default CrimeBranchTap;