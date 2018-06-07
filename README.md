# Sunset
Initial Nightwatch setup to use as a base for building out UI test automation.

See https://github.com/dwyl/learn-nightwatch and http://nightwatchjs.org/ for more information.

See http://nightwatchjs.org/api for details on Nightwatch API for assertions and browser interactions available.

## Requirements
JRE

Node js & npm

Google Chrome (Using chrome here as the default browser to run tests, but not strictly required)

## Installation
From the within the Sunset directory

    npm install

## Running tests
To run all tests

    node_modules/.bin/nightwatch

## Information
Directories:

`tests` : Home to all your tests

`pages` : Home to all your page objects. This contains your selectors for each page, sections (if you want to use them for better organised or larger pages) and commands which can be run in context of that page.

`commands` : Contains your custom commands. These commands are available to use on global scope, so may be useful for repeated automations. e.g. login

`data` : Holds your test data or any variables you wish to be easily accessible, such as login details or other test data.
