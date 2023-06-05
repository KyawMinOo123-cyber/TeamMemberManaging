const Footer = () => {
  const today = new Date();
  return (
    <footer className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-8">
          <h5>Team Member Managing App {today.getFullYear()}</h5>
          <p>
            <b>Special Thanks to Sir GavinLon</b>
          </p>
          <p>Developer:<u> Kyaw Min Oo</u></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
