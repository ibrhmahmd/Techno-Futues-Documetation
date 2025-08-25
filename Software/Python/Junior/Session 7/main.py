import random

list = ["✂️", "🪨", "📃"]


def game(score, computer_score):
    user_input = input("enter your choice :")

    computer_choice = random.choice(list)

    print("The computer choice is : " + computer_choice)

    if user_input == computer_choice:
        print("🤦‍ Draw")

    elif (
        user_input == "📃"
        and computer_choice == "🪨"
        or user_input == "🪨"
        and computer_choice == "✂️"
        or user_input == "✂️"
        and computer_choice == "📃"
    ):
        score = score + 1

        print("you WOONN 🎆🎆 ")
        print("Computer Lose 😒 ")

    elif (
        user_input == "✂️"
        and computer_choice == "🪨"
        or user_input == "📃"
        and computer_choice == "✂️"
        or user_input == "🪨"
        and computer_choice == "✂"
    ):
        computer_score = computer_score + 1

        print("you LOSE 😒")

        print("computer WOONN 🎆🎆")

    else:
        print("choose only from : " + str(list))

    return score, computer_score


number_of_games = 5
score = 0
computer_score = 0


while number_of_games >= 0:
    score, computer_score = game(score, computer_score)

    print(
        " 😊 Your Score is : "
        + str(score)
        + " | "
        + " 💻 Computer Score is : "
        + str(computer_score)
    )

    number_of_games = number_of_games - 1
