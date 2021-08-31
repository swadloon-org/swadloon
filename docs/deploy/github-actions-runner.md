---
title: Github Actions Runner
description:
  Instruction and script to set up a self-hosted Github Actions runner
tags:
  - ci-cd
  - vm
  - linux
status: draft
---

<DocHeader props={props}/>

## Overview

Github Actions support a number of
[virtual environments](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners)
to execute workflows.

By default, it's using one of the Github-hosted
[environment](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners)

While the default runners are convenient and reliable there are avantages to run
a self-hosted runner:

<ul>
  <li data-custom-bullet="🏎"><strong>Faster builds:</strong> With self-hosted runners there is no need to restore cache from <inlineCode>npm</inlineCode> or <inlineCode>yarn</inlineCode> installs since the machine is
  not destroyed after each build</li>
  <li data-custom-bullet="🔎"><strong>Easier Debugging:</strong> It's much easier to debug build issues since we can <inlineCode>ssh</inlineCode> in the machine and inspect
  the working directories.</li>
</ul>

## Requirements

Virtual or physical machine with the following specs:

- 4GB or more of RAM (we recommend setting a swap of 8GB)
- at least 30GB of free disk space (NVME storage if possible, otherwise SSD)
- linux (unix) based OS (we recommend debian)
- user (`ci`) with `sudo` enabled
- `git` version `> v2.31.1`

## Setup (Linux Runner)

For a Debian-based system, here is a sample script to get the VM set up:

```bash
#
# Update instance
#
apt update -y
apt upgrade -y
apt install sudo -y
sudo apt install build-essential openssl libssl-dev libz-dev libssl-dev libcurl4-gnutls-dev libexpat1-dev gettext cmake gcc gconf-service libvips-dev -y
sudo apt install libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 -y
sudo apt install libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 -y
sudo apt install libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget -y
#
# Install latest version of git
#
wget https://github.com/git/git/archive/refs/tags/v2.31.1.tar.gz -O git.tar.gz
tar -xf git.tar.gz
cd git-*
make prefix=/usr/local all
make prefix=/usr/local install
exec bash
cd ..
git --version
git config --global init.defaultBranch main
#
# Create SWAP file
#
free -m
fallocate -l 8G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab
free -m
#
# Create a ci user with password !212yeah
#
adduser ci
usermod -aG sudo ci

# switch to ci user
su - ci

# install brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Create a folder
mkdir actions-runner && cd actions-runner
# Download the latest runner package
curl -o actions-runner-linux-x64-2.277.1.tar.gz -L https://github.com/actions/runner/releases/download/v2.277.1/actions-runner-linux-x64-2.277.1.tar.gz
# Extract the installer
tar xzf ./actions-runner-linux-x64-2.277.1.tar.gz

# Create the runner and start the configuration experience
# visit https://github.com/newrade/newrade/settings/actions/runners/new?arch=x64&os=linux to get a fresh token
./config.sh --url https://github.com/newrade/newrade --token ACJSWQ6ZVPRDAHJ2P76OAFLAM4IS4

# Start the Runner as a service
sudo ./svc.sh install
sudo ./svc.sh start
sudo ./svc.sh status
```

Once the VM is ready to accept jobs, open the workflows to execute on the
self-hosted runner and change the `runs-on` property:

```diff
jobs:

  build-test-deploy:

-   runs-on: ubuntu-latest
+   runs-on: self-hosted

```

## Setup (MacOS Runner)

For a Macos system, here is a sample script to get the runner set up:

```bash
# Create a folder
mkdir actions-runner && cd actions-runner
# Download the latest runner package
curl -o actions-runner-linux-x64-2.277.1.tar.gz -L https://github.com/actions/runner/releases/download/v2.277.1/actions-runner-linux-x64-2.277.1.tar.gz
# Extract the installer
tar xzf ./actions-runner-linux-x64-2.277.1.tar.gz

# Create the runner and start the configuration experience
# visit https://github.com/newrade/newrade/settings/actions/runners/new?arch=x64&os=osx to get a fresh token
./config.sh --url https://github.com/newrade/newrade --token ACJSWQ6ZVPRDAHJ2P76OAFLAM4IS4

# Start the Runner as a service
./svc.sh install
./svc.sh start
./svc.sh status
```

Once the VM is ready to accept jobs, open the workflows to execute on the
self-hosted runner and change the `runs-on` property:

```diff
jobs:

  build-test-deploy:

-   runs-on: ubuntu-latest
+   runs-on: self-hosted

```

## Resources

- [Github documentation on self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners)
