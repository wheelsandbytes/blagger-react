server:
	yarn start
update:
	git checkout master && git pull --all
build:
	yarn build
deploy:
	yarn build && cp -R build/ /usr/local/var/www/html/
