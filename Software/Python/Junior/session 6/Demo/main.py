import random

list = ["✂️", '🪨', '📃']



def game(score):

    user_input = input("enter your choice :")

    computer_choice = random.choice(list)
    
    print("The computer choice is : " + computer_choice)
    
    
    
    if(user_input == computer_choice):
        print("🤦‍ Draw")
        
    elif (
         user_input == "📃" and computer_choice == "🪨" or
         user_input == "🪨" and computer_choice == "✂️" or
         user_input == "✂️" and computer_choice ==  "📃"
         ):
        
        score = score + 1

        print("you WOONN 🎆🎆")
        
    elif ( 
         user_input == "✂️" and computer_choice == "🪨" or
         user_input == "📃" and computer_choice == "✂️" or
         user_input == "🪨" and computer_choice == "✂" 
        ):
            
            print("you LOSE 😒")
    
    else: 
         print("choose only from : " + list )

    return score















number_of_games = 5 
score = 0

while number_of_games >= 0:

    score = game(score)
    
    print("Your Score is : " + str(score) )

    number_of_games = number_of_games - 1

    





















# import random 

# list = ['✂️', '🪨', '📃']


# computer_choice = random.choice(list)


# print(computer_choice)





# number_of_games = 5



# while number_of_games >= 0 :
    
#     number = int(input("enter your number 😊: "))
    
#     if number %2 == 0 :
#         print("the number is EVEN ✌️ ")
        
#     elif number %2 != 0 :
#         print("the umber is ODD 👍")
        
        
        
#     number_of_games = number_of_games - 1
    
    
    
    
    
    