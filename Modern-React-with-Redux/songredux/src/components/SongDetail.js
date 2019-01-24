import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a Song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state.selectedSongReducer);
  return {
    song: state.selectedSongReducer
  };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongDetail);
