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

# switch to ci user
su - ci

# Create a folder
mkdir actions-runner && cd actions-runner# Download the latest runner package
curl -o actions-runner-linux-x64-2.277.1.tar.gz -L https://github.com/actions/runner/releases/download/v2.277.1/actions-runner-linux-x64-2.277.1.tar.gz# Extract the installer
tar xzf ./actions-runner-linux-x64-2.277.1.tar.gz

# Create the runner and start the configuration experience
./config.sh --url https://github.com/newrade/newrade --token ACJSWQ6ZVPRDAHJ2P76OAFLAM4IS4# Last step, run it!
./run.sh
```
