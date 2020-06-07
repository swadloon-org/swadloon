# Forking the Repository

Fork the starter in a new repository to use the monorepo for your organisation.

## TODOs

- [ ] Complete fork-repo.ts script to automate the sequence

## Prerequisites

- your organization name `<org-name>`
- a new git repository `<repository-name>`

Review the environment variables set in the `.env` files:

```bash
NVM_NODE_VERSION=v14

MASTER_GIT_HOST=github.com
MASTER_REPO_ORG=newrade
MASTER_REPO_NAME=newrade

PROJECT_GIT_HOST=github.com
PROJECT_REPO_ORG=newrade
PROJECT_REPO_NAME=newrade
```

## Setup

Clone the starter and `cd` in the directory:

```bash
git clone --bare git@github.com:noveo-io/infra-starter.git
cd infra-starter.git
```

Push the starter repo to your `<repository-name>`, then delete the clone if you don't plan on commiting to the starter project:

```bash
git push --mirror <git repo>/<project>/<repository-name>.git
cd ..
rm -rf infra-starter.git
```

Checkout from your `<repository-name>` so you can work on it:

```bash
git clone <git repo>/<project>/<repository-name>.git <repository-name>
```

To pull new update from the starter project:

```bash
# add this repository as a new remote
git remote add starter git@github.com:noveo-io/infra-starter.git

# creates a merge commit from the release branch
git pull starter release
```

---
