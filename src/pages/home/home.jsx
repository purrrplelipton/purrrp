import { Drawer } from "@components/drawer";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { Summary } from "@components/summary";

const Home = () => {
  return (
    <>
      <Header />
      <Summary />
      <Drawer />
      <Footer />
    </>
  );
};

export default Home;
