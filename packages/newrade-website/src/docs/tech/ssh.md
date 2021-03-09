# SSH

## SSH Client

Config location:

```bash
code /Users/user/.ssh/config
```

## MacOS SSH Server

Config location:

```bash
sudo code /etc/ssh/sshd_config
# same as
sudo code /private/etc/ssh/sshd_config
```

To enable password login:

```bash
PasswordAuthentication yes
ChallengeResponseAuthentication no
```

Start and stop the service:

```bash
sudo launchctl stop com.openssh.sshd
sudo launchctl start com.openssh.sshd
```

Create new ssh key:

```bash
sudo code .ssh/authorized_keys
```

Add ssh key to host via password:

```bash
sudo ssh-copy-id -i ~/.ssh/id_rsa.pub user@hostname
```

Check that the pub key is added to MacOS's ssh server:

```
code ~/.ssh/authorized_keys
```

Connect to host:

```bash
ssh -v user@hostname
```

## Troubleshooting

Check for open port

```
nc -zw3 host 22 && echo "opened" || echo "closed"
```
