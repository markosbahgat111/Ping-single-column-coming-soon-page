import './App.scss';
import Form from './components/formEmail/form.component';
import logo from './assets/images/logo.svg';
import chart from './assets/images/illustration-dashboard.png';

function App() {
  return (
    <div className="App">
      <div className='header_container'>
        <img src={logo} alt="logo" />
        <h1>We are launching <b>Soon!</b></h1>
        <span>Subscribe and get notified</span>
      </div>
    <Form/>
      <div className='img_container'>
        <img src={chart} alt="chart"/>
      </div>
      <div className='footer_container'>
        <div>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <h6>©Copyright Ping. All rights Reserved.</h6>
      </div>
    </div>
  );
}

export default App;
