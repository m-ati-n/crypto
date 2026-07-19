import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Landing from "./component/Landing";
import CoinDetails from "./component/CoinDetails";
import NotFound from "./component/NotFound";

function App() {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Landing />}/>
                    <Route path="/coin/:id" element={<CoinDetails />}/>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
