import subprocess
import re

def connect_to_hidden_wifi(ssid, password):
    try:
        network_interfaces = subprocess.check_output(['netsh', 'wlan', 'show', 'interfaces']).decode('utf-8', 'ignore')
        interface_name = re.search(r'(?<=: )\w+', network_interfaces)

        if interface_name:
            subprocess.run(['netsh', 'wlan', 'connect', 'name=', ssid, 'SSID=', ssid, 'interface="', interface_name.group(0), '"'], check=True)
            return True

    except Exception as e:
        print(f"Error occurred: {str(e)}")
        return False

def main():
    ssid = "Your_Hidden_SSID"
    password = "Your_Password"

    if connect_to_hidden_wifi(ssid, password):
        print(f"Connected to {ssid} successfully.")

if __name__ == "__main__":
    main()