// This component is utilizing the Bootstrap CSS classes directly (https://getbootstrap.com/docs/3.4/css/).  To see components, look in the App.jsx file


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