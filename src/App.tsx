import React, { useState } from 'react';
import Compra from './components/Compra';
import DamageReportForm from './components/DamageReportFrom';
import Header from './components/Headrer';
import Inicial from './components/Inicial';
import ReportCard from './components/ReportCard';
import "./index.css";
 
 
interface Report {
  vehicle: string;
  damageDescription: string;
}
 
const App: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
 
  const addReport = (report: Report) => {
    setReports([report, ...reports]);
  };
 
  return (
 
 
 
 
    <div>
 
      <Inicial />
 
      <Compra />
 
      <Header />
      <main style={mainStyle}>
        <DamageReportForm onSubmit={addReport} />
        <section style={reportListStyle}>
          {reports.map((report, index) => (
            <ReportCard key={index} vehicle={report.vehicle} damageDescription={report.damageDescription} />
          ))}
        </section>
      </main>
    </div>
  );
};
 
 
const mainStyle: React.CSSProperties = {
  padding: '20px',
  maxWidth: '900px',
  margin: 'auto',
};
 
const reportListStyle: React.CSSProperties = {
  marginTop: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '15px',
};
 
 
export default App;