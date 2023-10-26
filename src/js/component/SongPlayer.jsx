import React, { useEffect, useRef, useState } from "react";

const SongPlayer = () => {

    const [songs, setSongs] = useState([]);
    const [songIndex, setSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const [playToggle, setPlayToggle] = useState(false);

    const songRef = useRef(null);

    const songsURL = "https://playground.4geeks.com/apis/fake/sound/songs";
    const baseSongURL = "https://assets.breatheco.de/apis/sound/"; // Base URL



    useEffect(() => {

        /* ----- / OBTENER CANCIONES / ----- */

        fetch(songsURL)
            .then((response) => { // Aqui es donde pones lo que quieres hacer con la respuesta
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })

            .then((data) => { // Procesar la información del json
                setSongs(data);
            })

            .catch((error) => {
                console.log('Parece que hay un problema', error);
            })

        /* ----- / INTERCAMBIAR BTN PLAY Y PAUSE / ----- */

        if (isPlaying) {
            document.querySelector('.button-play').classList.add('d-none');
            document.querySelector('.button-pause').classList.remove('d-none');
        } else {
            document.querySelector('.button-play').classList.remove('d-none');
            document.querySelector('.button-pause').classList.add('d-none');
        }
    }, [isPlaying]);

    /* ----- / FUNCIONES BUTTONS / ----- */

    const playSong = (index) => {

        setIsPlaying(true);
        setSongIndex(index);

        const song = songs[index];

        songRef.current.src = baseSongURL + song.url;
        songRef.current.play();

    }

    const stopSong = () => {

        setIsPlaying(false);
        setSongIndex(songIndex);
        songRef.current.pause();

    }

    const nextSong = () => {
        let nextIndex = songIndex + 1;
        if (nextIndex >= songs.length) {
            nextIndex = 0;
        }

        playSong(nextIndex);
    }

    const previousSong = () => {
        let prevIndex = songIndex - 1;
        if (prevIndex < 0) {
            prevIndex = songs.length - 1;
        }

        playSong(prevIndex);
    }


    return (
        <>
            {/* ----- / Songs / ----- */}
            <div className="container-songs text-white">
                <div>
                    {songs.map((song, i) => {
                        return (
                            <div className="song" onClick={() => playSong(i)}>
                                <h3 className="songNumber">
                                    {i + 1}
                                </h3>
                                <h3 className="songName" key={i}>
                                    {song.name} -
                                </h3>
                            </div>
                        )
                    })}
                </div>
            </div>


            {/* ----- / Buttons / ----- */}

            <div className="container-fluid container-audioPlayer text-white">
                <audio ref={songRef}></audio>

                {/* Previous song */}
                <button onClick={previousSong} className="button-previous">
                    <i className="icon-audio fa-solid fa-square-caret-left"></i>
                </button>

                {/* Play song */}
                <button onClick={() => playSong(songIndex)} className="button-play">
                    <i className="icon-audio fa-solid fa-play"></i>
                </button>

                {/* Stop song */}
                <button onClick={() => stopSong()} className="button-pause d-none">
                    <i class="icon-audio fa-solid fa-pause"></i>
                </button>

                {/* Next song */}
                <button onClick={nextSong} className="button-next">
                    <i className="icon-audio fa-solid fa-square-caret-right"></i>
                </button>
            </div>
        </>
    )
}

export default SongPlayer;