What was the hardest part to understand?
The trickiest part was trying to grasp how Playlist.prototype works to add methods to objects created by the constructor. 
Specifically how it refers to each individual playlist instance within those methods.

How does this code use this to tie data and behavior together?
this acts as a self-reference within each method and ensurs that when a method is called (e.g., myMix.addSong()), 
it operates directly on that specific myMix object's data.

What would you do differently if you wrote this object from scratch?
If I wrote this again I'd implement a currentSongIndex for more flexible playback control like going to the previous song.
