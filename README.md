# Smartcar
[![Build Status](https://travis-ci.org/shea-hawkins/smartcar.svg?branch=master)](https://travis-ci.org/shea-hawkins/smartcar)
# Description

This repository implements the Smartcar API and the GM->Smartcar translation service. It was designed with a service-oriented architecture so that each manufacturer API can be scaled as needed. For instance, if 'Tesla' requests drastically outweigh the 'GM' requests, the Tesla module can be scaled up without wasting resources on scaling the GM module.

![API Architecture](http://i.imgur.com/ZXohn57.jpg "API Architecture")

# Starting:

The only requirement for the repository is that the host machine has Docker installed with a recent version of docker-compose.

1. Run 'bash start.sh' 

# Testing:
1. With the server running, run 'bash test.sh'
