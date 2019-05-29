# In this project, you will process some data from a group of friends 
# playing scrabble. You will use dictionaries to organize players, words, 
# and points.

# There are many ways you can extend this project on your own if you 
# finish and want to get more practice!

letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 4, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]
Creating
letter_to_points = {key:value for key, value in zip(letters, points)}
# print(letter_to_points)

letter_to_points[" "] = 0
# print(letter_to_points)



def score_word(word):
  point_total = 0
  
  word = word.upper()
  
  for char in word: #Iterates through each character in word.
    #point_total += letter_to_points[char] #Adds character's points to total.
    #print(char)
    
    try: #Runs if character is in letters list.
      point_total += letter_to_points[char] #Adds character's points to total.
    except: #Runs if character is not in the letters list.
      point_total += 0 #Points are not added.
    
  return(point_total)



def play_word(player, word):
  print(player + " +" + word)
  player_to_words[player] += [word.upper()]
  
  
  
def update_point_totals():
  for player in player_to_words: #Iterates through each player in list.
  	# print(player)
    player_points = 0
    
    for word in player_to_words[player]: #Iterates through each word in player's list.
      # print(word + " - " + str(score_word(word)))
      player_points += score_word(word) #Adds word's score to player's points.
      
      player_to_points[player] = player_points #Adds player's points to player_to_points list.
      # print(player + ": "+ str(player_points) + "\n")
      
  print(player_to_points) #Prints all players and their score.

  
# amazing_points = score_word("AMAZING!")
# print(amazing_points)Creating

# brownie_points = score_word("BROWNIE")
# print(brownie_points)


player_to_words = {"player1": ["BLUE", "tennis", "EXIT"], "wordNerd": ["EARTH", "EYES", "MACHINE"], "Lexi Con": ["ERASER", "BELLY", "HUSKY"], "Prof Reader": ["ZAP", "COMA", "PERIOD"]}
print(player_to_words)

player_to_points = {}

update_point_totals()



#Step 15
print("\n")
play_word("wordNerd", "QUANTIFY")
print(player_to_words["wordNerd"])
update_point_totals()

print("\n")
play_word("player1", "spaceship")
print(player_to_words["player1"])
update_point_totals()

print("\n")
play_word("Lexi Con", "COFFEE")
print(player_to_words["Lexi Con"])
update_point_totals()

print("\n")
play_word("Prof Reader", "microphone")
print(player_to_words["Prof Reader"])
update_point_totals()
