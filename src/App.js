import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import data from "./util/data"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="main">

        {data.map((item) => {
          console.log(item);
          const { id, desc, image, title } = item
          return <Card key={id} desc={desc} url={image} title={title} />
        })
        }
      </div>

    </div>
  );
}

export default App;
