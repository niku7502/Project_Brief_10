import React, { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import "./Dashboard.css";

function Dashboard() {
  const [rentals, setRentals] = useState([
    { customer: "Aarav Sharma", vehicle: "Honda City", start: "05 Sep", end: "08 Sep", status: "Active" },
    { customer: "Priya Nair", vehicle: "Royal Enfield 350", start: "06 Sep", end: "07 Sep", status: "Returned" },
    { customer: "Karan Mehta", vehicle: "Mahindra XUV700", start: "09 Sep", end: "12 Sep", status: "Active" },
    { customer: "Divya Rao", vehicle: "Maruti Swift", start: "07 Sep", end: "09 Sep", status: "Overdue" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    customer: "",
    vehicle: "",
    start: "",
    end: "",
    status: "Active",
  });

  const stats = [
    { label: "Total Vehicles", value: "29", note: "3 added this month" },
    { label: "Active Rentals", value: String(rentals.filter(r => r.status === "Active").length), note: "Live count" },
    { label: "Revenue (This Month)", value: "₹1,84,500", note: "+18% vs last month" },
  ];

  const statusClass = (status) => {
    if (status === "Active") return "status active";
    if (status === "Overdue") return "status overdue";
    return "status returned";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.customer || !form.vehicle || !form.start || !form.end) {
      alert("Please fill in all fields.");
      return;
    }
    setRentals((prev) => [form, ...prev]);
    setForm({ customer: "", vehicle: "", start: "", end: "", status: "Active" });
    setShowModal(false);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <PageTitle title="Dashboard" subtitle="Overview of vehicles, rentals, and revenue" />
        <Button text="+ New Rental" onClick={() => setShowModal(true)} />
      </div>

      <div className="dashboard-stats">
        {stats.map((s, i) => (
          <Card key={i} title={s.value} description={s.label}>
            <span className="stat-note">{s.note}</span>
          </Card>
        ))}
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <h2>Recent Rentals</h2>
          <Button text="View All" variant="secondary" onClick={() => console.log("view all")} />
        </div>

        <div className="table-wrapper">
          <table className="rentals-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Vehicle</th>
                <th>Start</th>
                <th>End</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rentals.map((r, i) => (
                <tr key={i}>
                  <td>{r.customer}</td>
                  <td>{r.vehicle}</td>
                  <td>{r.start}</td>
                  <td>{r.end}</td>
                  <td><span className={statusClass(r.status)}>{r.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>New Rental</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <label>
                Customer Name
                <input
                  type="text"
                  name="customer"
                  value={form.customer}
                  onChange={handleChange}
                  placeholder="e.g. Rohan Verma"
                />
              </label>

              <label>
                Vehicle
                <input
                  type="text"
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                  placeholder="e.g. Hyundai Creta"
                />
              </label>

              <div className="modal-row">
                <label>
                  Start Date
                  <input type="text" name="start" value={form.start} onChange={handleChange} placeholder="e.g. 10 Sep" />
                </label>
                <label>
                  End Date
                  <input type="text" name="end" value={form.end} onChange={handleChange} placeholder="e.g. 13 Sep" />
                </label>
              </div>

              <label>
                Status
                <select name="status" value={form.status} onChange={handleChange}>
                  <option value="Active">Active</option>
                  <option value="Returned">Returned</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </label>

              <div className="modal-actions">
                <Button text="Cancel" variant="secondary" onClick={() => setShowModal(false)} type="button" />
                <Button text="Save Rental" type="submit" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;