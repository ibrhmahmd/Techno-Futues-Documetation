import random

list = ["✂️", '🪨', '📃']

number_of_games = 5 

while number_of_games >= 0:
    
    user_input = input("ادخل اختيارك :")
    computer_choice = random.choice(list)
    
    print("The computer choice is : " + computer_choice)
    
    
    
    if(user_input == computer_choice):
        print("🤦‍ Draw")
        
    elif (
         user_input == "📃" and computer_choice == "🪨" or
         user_input == "🪨" and computer_choice == "✂️" or
         user_input == "✂️" and computer_choice ==  "📃"
         ):
            
        print("you WOONN 🎆🎆")
        
    elif ( 
         user_input == "✂️" and computer_choice == "🪨" or
         user_input == "📃" and computer_choice == "✂️" or
         user_input == "🪨" and computer_choice == "✂" 
        ):
            
            print("you LOSE 😒")
    
    else: 
         print("choose only from : " + list )
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
    
    
    
    
    
    