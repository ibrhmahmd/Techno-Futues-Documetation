import time
import os

width = 30  # how wide the ball moves

while True:
    for pos in range(width):
        os.system("cls" if os.name == "nt" else "clear")
        print(" " * pos + "O")
        time.sleep(0.05)
    for pos in range(width, 0, -1):
        os.system("cls" if os.name == "nt" else "clear")
        print(" " * pos + "O")
        time.sleep(0.05)