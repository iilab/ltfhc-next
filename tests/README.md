# Testing suite for EMR.

## Overview

Cucumber-js and Zombie-js 

## Install

Currently the git repo contains the node_modules directory. 

`make install`

## Configure

Add entry for test in `.kansorc`. Example:
```
exports.env = {
    // the default env will be used when you just do "kanso push"
    'test': {
        db: 'http://user:pass@localhost:5984/emr_test_local'  
    }
};
```

## Run the tests

`make` 

Runs all feature tests in the features directory.

## Problems
* There seem to be a problem with XHR support (read somewhere that it is with XHR2). Current getSettings code in appinfo.js uses window.jQuery.ajax which seem to fail with an exception.