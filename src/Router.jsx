import {Routes, Route } from "react-router";

import Index from "./views/Index";
import Portfolio from "./views/Portfolio";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    )
}