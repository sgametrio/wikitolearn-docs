# Setup development environment

This document will guide you through the information you need to start contributing on WikiToLearn software.
These tools are helpful to work with the stack in a "point and click" fashion or the nearest approximation possible.

## Software requirements

* git
* docker
* docker-compose
* python3
* python3-argcomplete 
* python3-yaml

::: details More information on how to install them
* [What is Git?](https://www.atlassian.com/git/tutorials/what-is-git)
* [Install Docker](https://docs.docker.com/install/)
* [Install Docker Compose](https://docs.docker.com/compose/install/) 

On Debian-based systems run `apt-get install python3-yaml python3-argcomplete` to install them
Or with pip (install them globally or use virtual environment):
``` bash
pip3 install yaml
pip3 install argcomplete
activate-global-python-argcomplete
```
:::

## Setup source code

::: warning
Be sure to use `bash` as a shell when issuing commands below, compatibility with other shells is not guaranteed
:::

To setup the WikiToLearn dev kit you have to:

1. setup the `kde:` prefix in git with [this guide](https://community.kde.org/Sysadmin/GitKdeOrgManual#Let_Git_rewrite_URL_prefixes)
2. clone `kde:wikitolearn-sdk` repository
3. (optional) create the `config/repositories.yml` file (an example is `config/repositories.example.yml`)
4. create the `config/config.yml` file (an example is `config/config.example.yml`)

   Be sure that `host_ip` value is the same as your docker0 IP address. Otherwise change it accordingly.
   To check your docker0 IP address run `ip addr show docker0`

5. run `$ source ./setup-env`
6. run `$ wtl-setup-test` to test if you have fulfilled the requirements and the configurations

## How to manage services

If it's the first time you are here, you have to execute the steps below in this order to get something running:
1. Build
2. Run
3. (do it once) Create dummy dataset/Restore a dump
4. Run (again, to get the services up is something went wrong)
5. Open <http://localhost:13000> to see the frontend

### Build
To build the services you have to run:
``` bash
$ wtl-services-build
```
This command clone/pull the repositories and build all the services defined into docker-compose files. The first time takes long time.

### Run
To run the services you have to run:
``` bash
$ wtl-services-run
```
This command start all the services.

### Data restore/creation
If you need to restore a dump (data extracted from the official WikiToLearn website) you can run:
``` bash
$ wtl-migration-dump-load
```
::: warning
A `dump_url` must be set within `config/config.yml` file and the services have to be started.
:::

If you don't need (or don't have) real data, to get started you have to create fake (placeholder) data with:
``` bash
$ wtl-dummy-dataset
```
::: tip
Fake users and passwords are printed to the console. Take note if you want to login.
:::

### Stop
To stop the services you have to run:
``` bash
$ wtl-services-stop
```
This command stop and remove the service containers.

#### A note about the repositories directory

WikiToLearn's repositories will be cloned into the `repositories/` directory. This is a non-configurable option.
It allows tools to work with the assumption of the relative location of each repository.

## Make changes to existing services
If you want to make changes to the services' source code, inside `repositories/` directory you will find each service repository.
To see your changes live you have to re-build services and re-run them with the commands seen before.

## Software license

See [LICENSE](https://cgit.kde.org/wikitolearn-sdk.git/tree/LICENSE) file.
