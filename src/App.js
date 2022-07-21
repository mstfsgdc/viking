import { Header, Main, Footer } from './components';

function App() { // TODO ADD license
  return (
    <div className="w-screen min-h-screen bg-background-50 font-poppins">
      <div className="container flex flex-col justify-between h-screen mx-auto">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;