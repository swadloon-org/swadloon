# Setup VM

```bash
#
# Update instance
#
apt update -y
apt upgrade -y
apt install sudo -y
apt install build-essential -y
apt install openssl libssl-dev libz-dev libssl-dev libcurl4-gnutls-dev libexpat1-dev gettext cmake gcc -y
apt install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget -y
#
# Install latest version of git
#
wget https://github.com/git/git/archive/refs/tags/v2.31.1.tar.gz -O git.tar.gz
tar -xf git.tar.gz
cd git-*
make prefix=/usr/local all
make prefix=/usr/local install
exec bash
git --version
#
# Configure git
#
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
# Install NVM and Node
#
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
nvm install v15
#
# Install Yarn with npm
#
npm install --global yarn
#
# Create a ci user
#
adduser ci
usermod -aG sudo ci

# switch to ci user
su - ci

# Create a folder
mkdir actions-runner && cd actions-runner
# Download the latest runner package
curl -o actions-runner-linux-x64-2.277.1.tar.gz -L https://github.com/actions/runner/releases/download/v2.277.1/actions-runner-linux-x64-2.277.1.tar.gz
# Extract the installer
tar xzf ./actions-runner-linux-x64-2.277.1.tar.gz

# Create the runner and start the configuration experience
./config.sh --url https://github.com/newrade/newrade --token ACJSWQ6ZVPRDAHJ2P76OAFLAM4IS4

# Start the Runner as a service
sudo ./svc.sh install
sudo ./svc.sh start
sudo ./svc.sh status
```
