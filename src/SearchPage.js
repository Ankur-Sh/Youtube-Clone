import React from "react";
import "./SearchPage.css";
import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./VideoRow.css";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlined />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://kajabi-storefronts-production"
                channel="Clever Programmer"
                verified
                subs="660K"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also,expect programming tips and tricks that will take your coding skills to the..."
            />
            <hr />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training..."
                timestamsp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone with REACT JS for "
                image="https://"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training..."
                timestamsp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone with REACT JS for "
                image="https://"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training..."
                timestamsp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone with REACT JS for "
                image="https://"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training..."
                timestamsp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone with REACT JS for "
                image="https://"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training..."
                timestamsp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone with REACT JS for "
                image="https://"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training..."
                timestamsp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone with REACT JS for "
                image="https://"
            />
        </div>
    );
}

export default SearchPage;
