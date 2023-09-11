import Header from "./components/Header";
import SwitchPage from "./components/SwitchPage";
import Footer from "./components/Footer";

export default function App() {
  //create an array containing card contents

  let categoryContent = [
    { name: "MEN'S CLOTHING", img: "", route: "/products" },
    { name: "WOMEN'S CLOTHING", img: "", route: "/products" },
    { name: "ELECTRONICS", img: "", route: "/products" },
    { name: "JEWELLERY", img: "", route: "/products" },
  ];

  return (
    <div>
      <Header />
      <SwitchPage categoryContent={categoryContent} />
      <Footer categoryContent={categoryContent} />
    </div>
  );
}
