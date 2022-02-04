import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos"></div>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </div>
    );
}

export default RecommendedVideos;
