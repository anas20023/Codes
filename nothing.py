import pyautogui
import pyperclip
import time

def get_center(image_path, confidence=0.8):
    position = pyautogui.locateCenterOnScreen(image_path, confidence=confidence)
    return position if position else None

def click_and_get_position(image_path, offset_y=0):
    position = get_center(image_path)
    if position:
        x, y = position
        pyautogui.click(x, y + offset_y)
        return x, y
    else:
        print(f"Error: {image_path} not found on the screen.")
        return None

def get_wifi_passwords():
    passwords = []
    max_attempts = 10
    attempts = 0

    while attempts < max_attempts:
        # Click on the network icon
        network_icon_position = click_and_get_position('network_icon.png')
        if not network_icon_position:
            break

        # Check if there is a network with a red cross (not connected)
        not_connected_network_position = click_and_get_position('not_connected_network.png', offset_y=-20)
        if not not_connected_network_position:
            break

        # Click on the network name to view the password
        pyautogui.click(*not_connected_network_position)

        # Wait for the password dialog to appear
        time.sleep(1)

        # Click on the password field to select it
        password_field_position = (250, 320)
        pyautogui.click(*password_field_position)

        # Copy the password
        pyautogui.hotkey('ctrl', 'c')
        password = pyperclip.paste()
        passwords.append(password)

        # Click on the OK button
        ok_button_position = (300, 300)
        pyautogui.click(*ok_button_position)

        attempts += 1
    else:
        print("Max attempts reached. Exiting loop.")

    return passwords

# Example usage
wifi_passwords = get_wifi_passwords()
print("Wi-Fi Passwords:", wifi_passwords)
