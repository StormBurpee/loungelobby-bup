FILE=version
MAJOR=`cat $(FILE) | cut -f1 -d.`
MINOR=`cat $(FILE) | cut -f2 -d.`
RELEASE=`cat $(FILE) | cut -f3 -d.`

all: clean mapi mvendor msrc

clean:
	rm build/* -R -f

mvendor:
	mkdir build/api/vendor
	cp -r vendor/* build/api/vendor/

mapi:
	mkdir build/api
	cp -r -an srcapi/* build/api
	cp srcapi/.htaccess build/api

mcss:
	mkdir build/css
	cp -r css/* public/css

mphp:
	cp *.php public/

msrc:
	ng build --env=prod --prod --aot --no-sourcemap #Production
	#ng build --env=prod --aot --no-sourcemap
	#ng build --no-sourcemap #development
	cp -r dist/* build/
	#cp -r src/* build/

build: all release
	git add -A
	git commit -m "Pushing v$(MAJOR).$(MINOR).$(RELEASE)"
	git push

major:
	echo "$$(($(MAJOR) + 1)).0.0" > $(FILE)

minor:
	echo "$(MAJOR).$$(($(MINOR) + 1)).0" > $(FILE)

release:
	echo "$(MAJOR).$(MINOR).$$(($(RELEASE) + 1))" > $(FILE)
	MAJOR=`cat $(FILE) | cut -f1 -d.`
	MINOR=`cat $(FILE) | cut -f2 -d.`
	RELEASE=`cat $(FILE) | cut -f3 -d.`
