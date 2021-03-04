# How to Develop on Docker Container with VS Code Remote Server Extension

The next steps will to help you to create a simple Ubuntu based SSH server, this steps are based on the documentation found at https://docs.docker.com/engine/examples/running_ssh_service/

Prerequisites

- ssh keys
- VS Code installed
- Virtualization in the BIOS enabled
- Terminal with admin rights
- Docker installed (https://docs.docker.com/docker-for-windows/install/)

Procedure

Create a file with no extension named "Dockerfile". The path where this file is saved is not important but keep note of the path.

Inside the Dockerfile write the following code:

```dockerfile
FROM ubuntu:16.04

RUN apt-get update && apt-get install -y openssh-server
RUN mkdir /var/run/sshd
RUN echo 'root:password' | chpasswd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

# create user docker
RUN useradd -ms /bin/bash docker
WORKDIR /home/docker

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]
```

Where `password` can be replaced by yours.

Open a terminal into the path where you save the "Dockerfile" and Build the image by doing the following code:

```bash
docker build -t eg_sshd .
```

Run the container in detached mode on port `8888`:

```bash
docker run -d -P -p 8888:22 --name sshdd eg_sshd
```

In VS Code install the Remote Server extension: https://code.visualstudio.com/docs/remote/remote-overview

From VS Code use the extension to connect with SSH, enter your password.

You can use the command pallette (ctrl+shift+p) and search "Connect to Host...", then select "docker". A new VS Code window will appear. An alert will appear "Could not stablish connection to docker", select close.

To create a ssh key which you can use to connect to the container (avoiding entering password everytime):

```bash
ssh-keygen # name the new key id_rsa_docker
```

Download the keys to your local PC in `.ssh/`.

Add an entry to your ssh_config:

```bash
Host docker
    HostName localhost
    IdentityFile ~/.ssh/id_rsa_docker
    User root
    Port 8888
```

Add the new key to the ssh client:

```bash
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa_docker
```

From Git Bash on Windows, copy the public key to the ssh server:

```bash
ssh-copy-id -i ~/.ssh/id_rsa_docker.pub root@docker
```

Try to connect to the docker container with:

```bash
ssh root@docker
```

When you are logged in the container switch to user `docker`:

```bash
su docker
cd /home/docker/
mkdir .ssh
```

Paste the keys from your machine to the docker container using VS Code. To do this you can open ssh directory on a new VS code window. drag and drop config, ssh keys and known host inside vs code where the container is open

Inside the docker container create SSH Config file in `~/.ssh/config` with the access you need, e.g.:

```bash
Host vs-ssh.visualstudio.com
    HostName vs-ssh.visualstudio.com
    User cdpq
    IdentityFile ~/.ssh/id_rsa_azure
```

Install git (run each command separately):

```bash
apt update
apt-get install -y python-software-properties software-properties-common
add-apt-repository -y ppa:git-core/ppa
apt update
apt-get install git -y
git --version
```

Install all your extension in the SSH host with the VS Code command.
You can use the command pallette (ctrl+shift+p) "Remote: Install Local Extensions in...".

Switch to docker user and install nvm:

```bash
su docker
```

Install `nvm`: https://github.com/nvm-sh/nvm (Install & Update Script)

You can clone your repos now.

When working on a repo docker.
