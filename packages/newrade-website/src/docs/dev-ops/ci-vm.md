# Setup VM

```bash
#
# Update instance
#
apt update -y
apt upgrade -y
#
# Install latest version of git
#
apt install git -y
#
# Install NVM and Node
#
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

nvm install v15
npm install --global yarn
#
# Create a ci user
#
adduser ci
usermod -aG sudo ci


```
