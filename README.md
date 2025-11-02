### Some info

Initial app scaffolding has been completed in accordance with [Issue #1](https://github.com/V-D-X/ShopRight/issues/1).

This project is being organized into two distinct parts: Frontend and Backend. Each of these exist within the top-level
directories ```frontend/``` and ```backend/``` respectively.

---
### Getting started
This project is being built with Flask and Bootstrap (potentially), so you will need a setup capable of handling Python
and basic wed development.

To prevent conflicts in dependency and version requirements, both ```frontend/``` and ```backend/``` contain 
```requirements.txt``` files, warranting the use of multiple virtual environments as a consequence.

To create and setup a venv for the frontend and backend, type in the following commands into the CLI:
```bash
cd backend
python -m venv .venv
cd ..
cd frontend
python -m venv .venv
```
If commands 2 and 5 fail, try typing "python3" instead of "python". If this fails, make sure that Python has been
properly installed on your system and added to PATH.

To activate a virtual environment, navigate to the directory where it is located and type in the following:

- MacOS/Linux users:
```bash
source .venv/bin/activate
```
- Windows users:
```bash
.venv\Scripts\activate
```

Upon success, your terminal will now show "(.venv)" in the prompt.

To deactivate a virtual environment, simply execute: 
```bash
deactivate
```


To install dependencies for the frontend or backend, navigate to the appropriate directory, activate the venv, and 
execute the following:
```bash
pip install -r requirements.txt
```