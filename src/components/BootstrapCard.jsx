// src/BootstrapCard.jsx
const BootstrapCard = () => {
  return (
    <div className="card" style={{ width: '20rem'}}>
      <div className="card-body">
        <h5 className="card-title">Bootstrap Card</h5>
        <p className="card-text">
          This is a simple card component styled with Bootstrap.
        </p>
        <a href="#" className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default BootstrapCard;