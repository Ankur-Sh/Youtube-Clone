import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route />
                </Routes>
            </Router>

            <div className="app_page">
                <Sidebar />
                <RecommendedVideos />
            </div>
        </div>
    );
}

export default App;
