# Referral-App

# Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage)

## Features

- Create an account
- Log in to the created account
- Create refferal link

## Requirements

Make sure you have installed all of the following prerequisites on your development machine:

- Git - [Download & Install Git](https://git-scm.com/downloads). MacOS and Linux machines typically have this already installed.

- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. Make sure to get the latest active LTS version.

- Download the Refferal-App from this [link](https://github.com/Babanila/refferal-app.git) or use `git clone git@github.com:Babanila/refferal-app.git`.

## How to setup the refferal-app

- Go to your terminal.
- Locate the downloaded refferal-App folder.
- Change the directory to the refferal-app folder(e.g `cd refferal-App`).
- Run `yarn install`.

### How to start the refferal-app server

- From the refferal-app folder.
- Change the directory to the server folder(e.g `cd server`).
- Run `yarn install`.
- Run `yarn prisma generate`.
- Run `yarn start` to start the server at `e.g http://localhost:4000`).

### How to start the refferal-app frontend

- Open another terminal
- Locate the refferal-app root directory
- Run `yarn start` to start the web app
