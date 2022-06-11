import Header from "./components/Header/Header.js";
import AppRoutes from "./routes/AppRoutes.js";
import Footer from "./components/Footer/Footer.js";
import PurchaseModal from "./components/PurchaseModal/PurchaseModal.js";
import { AppWrapper } from "./App-styles.js";

const App = () => {
  return (
    <>
      <AppWrapper>
        <Header />
        <AppRoutes />
        <PurchaseModal />
      </AppWrapper>
      <Footer />
    </>
  );
};

export default App;
