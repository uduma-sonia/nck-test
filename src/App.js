import Navbar from "./components/Navbar";
import PaymentInfo from "./components/PaymentInfo";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="container font-manrope px-7 mb-20">
      <Navbar />
      <PaymentInfo />
      <Summary />
    </div>
  );
}

export default App;
