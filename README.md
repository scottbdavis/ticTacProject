# ticTacProject
1. I would like to implement a feature that stated "Player X it is your turn now" and maybe an audio clip of hoot and holler after one of the players wins.

introduce a variable - nextPlayerAlert and use the same logic as current playerTurn but with player == '1' ternary - opposite of the current player =='0'

in the checkForWinner function you could add an event for when either player wins that triggers the audio clip

2. Maybe the whole board also changes color 

you could just add a CSS class for background color in board that is triggered by status changing via gameState

3. It would be good to highlight the winning squares yellow to make it obvious how the game was won. 

you would have to store the winning squares in an array and then apply a color to that array.
