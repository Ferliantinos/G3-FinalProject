import InputForm from "./components/fragments/InputForm";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <form action="#">
          <div className="flex flex-col min-h-screen justify-center items-center gap-2">
            <h1>Selamat datang</h1>
            <InputForm />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
