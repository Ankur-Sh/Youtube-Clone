import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="app_page">
                <Sidebar />
                <RecommendedVideos />
            </div>
        </div>
    );
}

export default App;