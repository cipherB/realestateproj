import Routes from "./routes";
import "./App.css";

function App() {
  console.log("str",process.env.REACT_APP_FIREBASE_STORAGE_BUCKET);
  console.log("dom",process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
  console.log("key",process.env.REACT_APP_FIREBASE_APIKEY);
  console.log("app",process.env.REACT_APP_FIREBASE_APPID);
  console.log("mea",process.env.REACT_APP_FIREBASE_MEASUREMENT_ID);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
