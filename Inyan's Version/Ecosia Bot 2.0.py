# Author - Thor
import pyautogui
from time import sleep
import random
from pyscreeze import ImageNotFoundException

list = ["TREEESSSSS!", "GIMME REM TREES BOI!!!!!!!!"]

while True:
    if pyautogui.locateCenterOnScreen('Searchbar1.PNG', grayscale=True, confidence=0.6) == True:
        s = random.choice(list)
        pyautogui.click(pyautogui.locateCenterOnScreen('Searchbar1.PNG', grayscale=True, confidence=0.6))
        pyautogui.write(s)
        sleep(0.1)
        pyautogui.press('enter')
        sleep(1)
        pyautogui.hotkey('browserback')
        print("Success")
    elif pyautogui.locateCenterOnScreen('Searchbar2.PNG', grayscale=True, confidence=0.6):
        s = random.choice(list)
        pyautogui.click(pyautogui.locateCenterOnScreen('Searchbar2.PNG', grayscale=True, confidence=0.6))
        pyautogui.write(s)
        sleep(0.1)
        pyautogui.press('enter')
        sleep(1)
        pyautogui.hotkey('browserback')
        print("Success")
    elif pyautogui.locateCenterOnScreen('Searchbar3.PNG', grayscale=True, confidence=0.6):
        s = random.choice(list)
        pyautogui.click(pyautogui.locateCenterOnScreen('Searchbar3.PNG', grayscale=True, confidence=0.6))
        pyautogui.write(s)
        sleep(0.1)
        pyautogui.press('enter')
        sleep(1)
        pyautogui.hotkey('browserback')
        print("Success")
    elif pyautogui.locateCenterOnScreen('Searchbar4.PNG', grayscale=True, confidence=0.6):
        s = random.choice(list)
        pyautogui.click(pyautogui.locateCenterOnScreen('Searchbar4.PNG', grayscale=True, confidence=0.6))
        pyautogui.write(s)
        sleep(0.1)
        pyautogui.press('enter')
        sleep(1)
        pyautogui.hotkey('browserback')
        print("Success")
    