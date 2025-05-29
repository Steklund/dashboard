import "./DashboardCard.css";

export default function DashboardCard({ title, description, href, logo }) {
  return (
    <a
      href={href}
      className="dashboard-card group"
    >
      <div className="dashboard-card-logo-row">
        <img
          src={logo}
          alt={`${title} Logo`}
          className="dashboard-card-logo"
        />
        <div>
          <h2 className="dashboard-card-title">{title}</h2>
          <p className="dashboard-card-desc">{description}</p>
        </div>
      </div>
    </a>
  );
}