import Header from "./components/Header";
import SwitchPage from "./components/SwitchPage";
import Footer from "./components/Footer";

export default function App() {
  //create an array containing card contents

  let categoryContent = [
    { name: "MEN'S CLOTHING", img: "", category: "men's clothing" },
    { name: "WOMEN'S CLOTHING", img: "", category: "women's clothing" },
    { name: "ELECTRONICS", img: "", category: "electronics" },
    { name: "JEWELLERY", img: "", category: "jewelery" },
  ];

  return (
    <div>
      <Header />
      <SwitchPage categoryContent={categoryContent} />
      <Footer categoryContent={categoryContent} />
    </div>
  );
}
