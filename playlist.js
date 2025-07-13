/**
 * Constructor function for creating a new Playlist object.
 * @param {string} name - The name of the playlist.
 */
function Playlist(name) {
  // 'this' refers to the new object instance being created
  // Initializes the 'name' property of the playlist with the provided name.
  this.name = name;
  // 'this' refers to the playlist instance.
  // Initializes an empty array to store the songs in the playlist.
  this.songs = [];
  // 'this' refers to the playlist instance.
  // Initializes 'currentSong' to null, indicating no song is playing initially.
  this.currentSong = null;
}

/**
 * Adds a new song to the end of the playlist.
 * @param {string} songTitle - The title of the song to add.
 */
Playlist.prototype.addSong = function(songTitle) {
  // 'this' refers to the specific playlist instance on which addSong is called.
  // The method adds the 'songTitle' to the 'songs' array of that instance.
  this.songs.push(songTitle);
};

/**
 * Starts playing the first song in the playlist.
 * It also logs the currently playing song to the console.
 */
Playlist.prototype.playFirst = function() {
  // 'this' refers to the playlist instance.
  // Checks if there are any songs in the 'songs' array before attempting to play.
  if (this.songs.length > 0) {
    // 'this' refers to the playlist instance.
    // Sets 'currentSong' to the first song in the 'songs' array.
    this.currentSong = this.songs[0];
    // This output means the song assigned to 'this.currentSong' is now considered "playing."
    console.log("Now playing:", this.currentSong);
  }
};

/**
 * Skips the current song and moves to the next song in the playlist.
 * If there's only one song or no songs left, it provides appropriate feedback.
 */
Playlist.prototype.skipSong = function() {
  // 'this' refers to the playlist instance.
  // Checks if there's more than one song to skip to the next.
  if (this.songs.length > 1) {
    // 'this' refers to the playlist instance.
    // Removes the first song from the 'songs' array.
    this.songs.shift();
    // 'this' refers to the playlist instance.
    // Sets 'currentSong' to the new first song in the array.
    this.currentSong = this.songs[0];
    // This output indicates a song was skipped, and it shows the title of the new current song.
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    // This output means there aren't enough songs remaining to perform a skip operation.
    console.log("No more songs to skip.");
  }
};

//Displays the name of the playlist and all the songs currently in it.
Playlist.prototype.listSongs = function() {
  // 'this' refers to the playlist instance.
  // This output displays the name of the playlist instance.
  console.log("Playlist:", this.name);
  // 'this' refers to the playlist instance.
  // This output displays all the song titles from the 'songs' array, separated by commas.
  console.log("Songs:", this.songs.join(", "));
};

// Creating a new playlist instance called 'myMix'.
let myMix = new Playlist("My Chill Mix");
// Adding songs to the 'myMix' playlist using the addSong method.
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
// Playing the first song in 'myMix' ("Lofi Study").
myMix.playFirst();
// Skipping the current song in 'myMix' (removes "Lofi Study", plays "Chillhop Beats").
myMix.skipSong();
// Listing all remaining songs in 'myMix' ("Chillhop Beats", "Evening Jazz").
myMix.listSongs();
