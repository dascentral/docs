# Git

## Introduction

[Git](https://git-scm.com) is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

## Repository Management

### Git global setup

```
git config --global user.name "Douglas Smith"
git config --global user.email "smithda@gmail.com"
```

### Create a new repository

```
git clone git@gitlab.com:dascentral/REPO.git
cd REPO
git switch -c main
touch README.md
git add README.md
git commit -m "add README"
git push -u origin main
```

### Push an existing folder to an empty repository

```
cd existing_folder
git init --initial-branch=main
git remote add origin git@gitlab.com:dascentral/REPO.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Push an existing Git repository

```
cd existing_repo
git remote rename origin old-origin
git remote add origin git@gitlab.com:dascentral/REPO.git
git push -u origin --all
git push -u origin --tags
```

## Branch Management

### Rename `master` to `main`

https://www.git-tower.com/learn/git/faq/git-rename-master-to-main

```bash
git branch -m master main
git push -u origin main
# update default branch in the repo
git push origin --delete master
```

### Checkout remote branch

Two ways to do this:

```bash
git checkout --track origin/[branch]
```

```bash
git checkout -b [branch] origin/[branch]
```

### Upstream Branch

Want to make sure your local branch is always pushed upstream to the origin? Update your git config.

```bash
git config --global push.default current
```

## Tag Management

I never remember how to checkout a specific tag. It's actually quite simple:

```bash
git checkout tags/v1.0
```

## Remote Management

Rename a remote.

```bash
git remote rename [old] [new]
```

