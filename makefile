SHELL := /bin/bash
.SILENT:
.DEFAULT_GOAL := help

.PHONY: help
help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.PHONY: start
start: ## [Start local development server]
	docker-compose up

.PHONY: restart
restart: ## [CLear docker containers]
	docker stop $(docker ps -a -q)
	docker rm $(docker ps -a -q)
	docker-compose up

