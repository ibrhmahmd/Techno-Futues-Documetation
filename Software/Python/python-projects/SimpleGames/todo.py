# # Simple To-Do List App for Beginners
# # This app helps you keep track of your tasks

# # This list will store all your tasks
# my_tasks = []

# def add_new_task():
#     """Ask user for a task and add it to the list"""
#     # Get the task from user
#     task_name = input("What task do you want to add? ")
    
#     # Add the task to our list
#     my_tasks.append(task_name)
    
#     # Tell user the task was added
#     print(f"Great! I added '{task_name}' to your list.")

# def show_all_tasks():
#     """Show all tasks in the list"""
#     # Check if there are any tasks
#     if len(my_tasks) == 0:
#         print("You don't have any tasks yet!")
#         return
    
#     # Show all tasks with numbers
#     print("\n--- Your Tasks ---")
#     for i in range(len(my_tasks)):
#         print(f"{i + 1}. {my_tasks[i]}")
#     print()

# def remove_task():
#     """Remove a task from the list"""
#     # Show tasks first so user can see the numbers
#     show_all_tasks()
    
#     # Check if there are tasks to remove
#     if len(my_tasks) == 0:
#         return
    
#     # Ask which task to remove
#     try:
#         task_number = int(input("Which task number do you want to remove? "))
        
#         # Check if the number is valid
#         if 1 <= task_number <= len(my_tasks):
#             # Remove the task (remember: lists start at 0, so subtract 1)
#             removed_task = my_tasks.pop(task_number - 1)
#             print(f"Removed: {removed_task}")
#         else:
#             print("That's not a valid task number!")
#     except ValueError:
#         print("Please type a number!")

# # Main program loop
# print("Welcome to your To-Do List!")
# print("I'll help you keep track of your tasks.")

# while True:
#     # Show menu options
#     print("\nWhat would you like to do?")
#     print("1. Add a new task")
#     print("2. See all my tasks")
#     print("3. Remove a task")
#     print("4. Exit the program")
    
#     # Get user's choice
#     user_choice = input("Type 1, 2, 3, or 4: ")
    
#     # Handle user's choice
#     if user_choice == "1":
#         add_new_task()
#     elif user_choice == "2":
#         show_all_tasks()
#     elif user_choice == "3":
#         remove_task()
#     elif user_choice == "4":
#         print("Thanks for using the To-Do List! Goodbye!")
#         break
#     else:
#         print("I didn't understand that. Please type 1, 2, 3, or 4.")





# # Simple Text-Based To-Do App

# # Store tasks in a list of dictionaries
# tasks = []

# def add_task(title):
#     """Add a new task to the list."""
#     task = {"title": title, "done": False}
#     tasks.append(task)
#     print(f"✅ Task '{title}' added!")

# def view_tasks():
#     """Show all tasks."""
#     if not tasks:
#         print("📭 No tasks yet!")
#         return
    
#     print("\n--- Your To-Do List ---")
#     for i, task in enumerate(tasks, start=1):
#         status = "✅" if task["done"] else "❌"
#         print(f"{i}. {task['title']} - {status}")
#     print()

# def mark_done(task_number):
#     """Mark a task as done."""
#     if 0 < task_number <= len(tasks):
#         tasks[task_number - 1]["done"] = True
#         print(f"🎉 Task '{tasks[task_number - 1]['title']}' marked as done!")
#     else:
#         print("⚠ Invalid task number.")

# # --- Main Loop ---
# while True:
#     print("\n1. Add Task")
#     print("2. View Tasks")
#     print("3. Mark Task as Done")
#     print("4. Quit")

#     choice = input("Choose an option: ")

#     if choice == "1":
#         title = input("Enter task title: ")
#         add_task(title)
#     elif choice == "2":
#         view_tasks()
#     elif choice == "3":
#         try:
#             num = int(input("Enter task number: "))
#             mark_done(num)
#         except ValueError:
#             print("⚠ Please enter a valid number.")
#     elif choice == "4":
#         print("👋 Goodbye!")
#         break
#     else:
#         print("⚠ Invalid choice. Try again.")





# def todo(task):
#     print ( " this is your task : "+task)






# task  = input("Enter task: ")

# todo(task)


# ---------------------------------------------------------------------------------
tasks = []

def add_task():

    task = input("Enter your task: ")
    tasks.append(task)

    print(f"Task '{task}' added successfully.")
    print("------------------------------------------------")

    
def show_tasks():
    print(" your tasks: ")
    print(tasks)

    print("------------------------------------------------")


def delete_task():
        print(tasks)
        
        user_task_to_delete = input("enter the task you want to delete : ")
        tasks.remove(user_task_to_delete)
        print("tasks removed succesfully 👋")
        print(tasks)
        print("------------------------------------------------") 





number = 10 

while number > 0:

    print("1. Enter a new task. ")
    print("2. Show your tasks. ")
    print("3. Delete a task. ")
    print("4. Exit the application. ")


    user_choice = input("Enter your choice: ")


    if user_choice == "1":
      add_task()

    elif user_choice == "2":
        show_tasks()
       

    elif user_choice == "3":  
        delete_task()

    elif user_choice == "4":
      print ("Bye 👋")
      break

    number = number - 1








