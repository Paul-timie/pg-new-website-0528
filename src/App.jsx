import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Route_links from "./Route/route";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route_links />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
