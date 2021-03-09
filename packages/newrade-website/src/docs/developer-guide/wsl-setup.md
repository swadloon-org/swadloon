---
name: Installing WSL 2 On Windows 10 (Archived)
---

# Installing WSL 2 On Windows 10 (Archived)

> Notice: as of nov 2021 we are not supporting Windows for development

Guide : https://docs.microsoft.com/en-us/windows/wsl/install-win10

## Prerequisites

- Windows 10 build version newer than 19041 (check with `winver`)
- hardware virtualization enabled

## Setup

In an admin Powershell, run:

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

Restart.

If a message appear about updating the WSL kernel, visit: https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel

Run the command:

```bash
wsl --set-default-version 2
```

And if no warning or errors are reported, proceed to install Ubuntu LTS from the Windows Store.

Start the ubuntu shell with the Ubuntu app.

Create a user and password for the Ubuntu system.

## Installing dependencies for Ubuntu

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install build-essential curl file git
```

## Install Brew for Linux

Run the command, and choose to install in .linuxbrew (sudo password required)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Add Brew to `.profile`:

```bash
test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
test -r ~/.bash_profile && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile
echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile
```

Test brew installation:

```bash
brew install hello
```

_You are now ready to continue the developer setup._

## Using VSCode with WSL

Either open a folder with:

```bash
wsl code .
```

Or use the VSCode command:

![image](https://user-images.githubusercontent.com/9644867/84569928-0d4b7e00-ad58-11ea-8dc4-7cf8091c192b.png)
