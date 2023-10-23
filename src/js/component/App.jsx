import React from "react";
import Nav from "./Nav.jsx";
import AudioPlayer from "./AudioPlayer.jsx";
import Songs from "./Songs.jsx";

const App = () => {
	return (
		<>
			<Nav />
			<div className="container-songs">
				<Songs />
			</div>
			<AudioPlayer />
		</>
	);
};

export default App;
