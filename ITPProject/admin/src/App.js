import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admindashboard from './pages/Admindashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Admindashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
