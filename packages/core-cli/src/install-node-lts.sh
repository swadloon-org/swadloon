#!/bin/bash

# compatibility with npm
unset npm_config_prefix

# source nvm script
source ~/.nvm/nvm.sh

# install specific version of node
nvm install v14

# make version the default
nvm alias default v14