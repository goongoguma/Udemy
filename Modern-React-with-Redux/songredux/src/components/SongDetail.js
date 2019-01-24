import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongDetail = props => {
  console.log(props);
  if (!props.song) {
    return <div>Select a Song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {props.song.title}
        <br />
        Duration: {props.song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    song: state.selectedSongReducer
  };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongDetail);
