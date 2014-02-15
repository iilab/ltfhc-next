# Testing suite for EMR.

## Overview

Cucumber-js and Zombie-js 

## Install

Currently the git repo contains the node_modules directory. 

`make install` (runs npm install --dev to install devDependencies)

## Run the tests

`make` 

Runs all feature tests in the features directory.

## Problems
* There seem to be a problem with XHR support (read somewhere that it is with XHR2). Current getSettings code in appinfo.js uses window.jQuery.ajax which seem to fail with an exception.