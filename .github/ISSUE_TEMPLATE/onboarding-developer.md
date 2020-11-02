---
name: Developer Onboarding
about: Cover all the steps to onboard a new developer in the team.
title: '<NAME> Onboarding'
labels: "admin \U0001F4BC"
assignees: ''
---

## Admin / HR

- [ ] timesheet
- [ ] contact infos (adress, NAS, etc)
- [ ] void check

## Prerequisites

### Development Machine

- [ ] MacOS
- [ ] Mac with 32GB RAM+

### Accounts

- [ ] @newrade email
- [ ] install Gmail app on personal phone
- [ ] setup google auth application
- [ ] enable 2FA for gmail
- [ ] Slack account
- [ ] install Slack app on personal phone
- [ ] configure snooze for Slack (Settings > Notification schedule)
- [ ] enable 2FA for slack
- [ ] Github account in Newrade's Dev team
- [ ] enable 2FA for Github
- [ ] 1Password account
- [ ] install 1Password app on personal phone
- [ ] enable 2FA for 1Password
- [ ] Figma account
- [ ] install Figma mirror app on personal phone
- [ ] GraphCMS account
- [ ] Contentful account
- [ ] Netlify account

### Software

- [ ] Chrome browser https://www.google.com/intl/en_ca/chrome/
- [ ] Slack https://slack.com/intl/en-ca/downloads/mac
- [ ] Figma https://www.figma.com/downloads/
- [ ] 1Password https://1password.com/downloads/mac/
- [ ] brew https://brew.sh/
- [ ] nvm https://github.com/nvm-sh/nvm
- [ ] VS Code https://code.visualstudio.com/

## Machine Setup

### Fonts

- [ ] Install SF Symbols from https://developer.apple.com/design/resources/

### Recommended MacOS Utilities

- [ ] Spectacle https://www.spectacleapp.com/
- [ ] iStats https://bjango.com/mac/istatmenus/
- [ ] Total Spaces https://totalspaces.binaryage.com/
- [ ] Dato https://apps.apple.com/ca/app/dato/id1470584107?mt=12
- [ ] Macs Fan Control https://crystalidea.com/macs-fan-control
- [ ] Giphy https://apps.apple.com/ca/app/giphy-capture-the-gif-maker/id668208984?mt=12

### Keyboard

- [ ] Install the US Keyboard (MacOS Settings > Keyboard > Input Sources > Add US keyboard)
- [ ] Install the commonly used Quebec keyboard from this repo: https://github.com/ergosteur/cf-keylayout

### Homebrew

- [ ] Install `brew` from the website: https://brew.sh/

### Github

- [ ] Create a .ssh key ([instructions](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent))
- [ ] Checkout from the repos you need

### Bash

- [ ] Change the terminal to bash:

  ```bash
  chsh -s /bin/bash
  ```

  Then restart VSCode

### NVM

- [ ] Install `nvm` (node version manager) by following the instructions here https://github.com/nvm-sh/nvm

  You may have to restart VS Code for changes to be applied to your path.

  Make sure `nvm` is available in the terminal.

- [ ] Run `nvm install` to install the repository's recommended NodeJS version

- [ ] Run `node -v` and make verify that the correct version is installed.

### Yarn

- [ ] Install `yarn`:

  ```bash
  # install (first time)
  brew install yarn

  # to upgrade
  brew upgrade yarn
  ```

- [ ] Run `yarn` to install dependencies

### VS Code

Opening the folder with VSCode will prompt to install extensions listed in `.vscode/extensions.json`.

- [ ] Setup a .env variable file:

  ```env
  NVM_NODE_VERSION=v14

  MASTER_GIT_HOST=github.com
  MASTER_REPO_ORG=newrade
  MASTER_REPO_NAME=newrade

  PROJECT_GIT_HOST=github.com
  PROJECT_REPO_ORG=newrade
  PROJECT_REPO_NAME=newrade
  ```

- [ ] configure Settings Sync https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync

#### .editorconfig

An `.editorconfig` is included so your IDE should pick up the rules.

#### ESLint

A `.eslintrc.js` file is included.

- [ ] Install the [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

#### Prettier

[Prettier](https://prettier.io/) is used to format the codebase. It's recommended to install an IDE plugin so that `prettier` is applied on each save.

- [ ] Install the [prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and then enable `formatOnSave` in your config:

  ```json
  {
    "editor.formatOnSave": true
  }
  ```

### Git Configuration

- [ ] setup minimal .gitconfig

  ```conf
  # optional: keep aliases that makes sense
  [alias]
    c = commit
    ck = checkout
    a = add --all
    p = push
    s = status
    up = pull upstream master
    tree-stat = log --graph --all --decorate --stat --date=iso
    tree = log --graph --all --decorate=short --date=iso --oneline
    ca = commit --amend --no-edit
  # mandatory
  [user]
    name = <github-username>
    email = <github-email>
  # mandatory
  [fetch]
    prune = true
  ```

## Design Resources

- [ ] Access to the projects' google drive (https://drive.google.com/drive/u/1/folders/1LAAdEZzm5btu1xR6mvw62oL6P7vIgago)
- [ ] install the desktop figma app https://www.figma.com/downloads/

## Done!

- [ ] 👏 Good Job!

---

## Troubleshooting

### Permissions issues with /scripts

Set permissions for the repo CLI:

```bash
chmod a+x node_modules/.bin/nr-core-cli
```

### NVM Warning Message About Unsupported Prefix

If you get a message similar to:

```bash
nvm is not compatible with the npm config "prefix" option: currently set to "/home/linuxbrew/.linuxbrew
```

Unset the `default` alias with:

```bash
nvm unalias default
```

---
