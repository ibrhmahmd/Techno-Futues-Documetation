# print("enter your first number")
# first = int(input())



# print("enter your second number")
# second = int(input()) 


# if


# print("the result is ")
# result = first + second 

# print(result)


# number1 = input("enter the first number : ")

# number2 = input("enter the second number : ")


# if(number1 < number2):
#     print("number one is less than number2")
    
# elif(number1 > number2):
#     print("number one is more than number2")
    
# else: 
#     print("the number are equal")






number_of_games = 10

while(number_of_games > 5):
    user_input = input("ادخل اختيارك :")
    computer_choice = "🪨" 
    
    if(user_input == "🪨"):
        print("🤦‍تعادل")
    elif(user_input == "📃"):
        print("you WOONN 🎆🎆")
    elif(user_input == "✂️"):
        print("you LOSE 😒")
    
    number_of_games = number_of_games - 1
    



