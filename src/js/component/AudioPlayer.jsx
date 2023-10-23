import React from "react";

const AudioPlayer = () => {
    return (
        <div className="container-fluid container-audioPlayer text-white">
            <button className="button-previous">
                <i className="icon-audio fa-solid fa-square-caret-left"></i>
            </button>
            <button className="button-play">
                <i className="icon-audio fa-solid fa-play"></i>
            </button>
            <button className="button-next">
                <i className="icon-audio fa-solid fa-square-caret-right"></i>
            </button>
        </div>
    );
}

export default AudioPlayer;