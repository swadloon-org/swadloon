# silence zsh prompt on macos
export BASH_SILENCE_DEPRECATION_WARNING=1

# loads nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

 # this loads nvm bash_completion
export PATH=$PATH:~/.local/bin
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
