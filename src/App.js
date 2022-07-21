import { Header, Main, Footer } from './components';

function App() {
  return (
    <div className="w-screen min-h-screen px-10 bg-background-50 font-poppins">
      <div className="container flex flex-col justify-between h-screen mx-auto">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;