import subprocess
import os

def execute_command_in_cmd_terminal(command, working_directory):
    try:
        # Construction de la commande pour ouvrir un terminal CMD et exécuter la commande
        cmd_command = f'start cmd /K "cd /d {working_directory} && {command}"'
        
        # Exécution de la commande
        subprocess.run(cmd_command, shell=True, check=True)
        
    except subprocess.CalledProcessError as e:
        print(f"Une erreur s'est produite : {e}")

# Répertoire de travail
working_directory = r'C:\Users\soufiane.allaoui\Documents\WhisperWeb'

file = input("Insert file :")

# Demander à l'utilisateur d'entrer la commande à exécuter
user_command = "whisper tests/"+ file + " --model small"


# Exécuter la commande dans le terminal CMD
execute_command_in_cmd_terminal(user_command, working_directory)
