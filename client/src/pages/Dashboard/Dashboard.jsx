import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import './Dashboard.css';

const stats = [
  { label: 'Total vehicles', value: '32' },
  { label: 'Active rentals', value: '14' },
  { label: 'Overdue returns', value: '3' },
  { label: 'Revenue (month)', value: '₹48,200' },
];

const recent = [
  { vehicle: 'Honda City', customer: 'Rahul Sharma', status: 'Active' },
  { vehicle: 'Royal Enfield', customer: 'Priya Das', status: 'Returned' },
  { vehicle: 'Swift Dzire', customer: 'Aman Roy', status: 'Overdue' },
];

function Dashboard() {
  return (
    <div className="dashboard container">
      <Sidebar />

      <div className="dashboard__main">
        <h1>Dashboard</h1>

        <div className="dashboard__stats">
          {stats.map((s) => (
            <Card key={s.label} className="dashboard__stat">
              <span className="dashboard__stat-value">{s.value}</span>
              <span className="dashboard__stat-label">{s.label}</span>
            </Card>
          ))}
        </div>

        <Card className="dashboard__table-card">
          <h3>Recent rentals</h3>
          <table className="dashboard__table">
            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Customer</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((r) => (
                <tr key={r.vehicle}>
                  <td>{r.vehicle}</td>
                  <td>{r.customer}</td>
                  <td>
                    <span className={`dashboard__status dashboard__status--${r.status.toLowerCase()}`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;