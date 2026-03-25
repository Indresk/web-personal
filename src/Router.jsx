import {Routes, Route } from "react-router";

import Index from "./views/Index";
import Portfolio from "./views/Portfolio";
import ErrorPage from "./views/ErrorPage";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    )
}