FILE=version
MAJOR=`cat $(FILE) | cut -f1 -d.`
MINOR=`cat $(FILE) | cut -f2 -d.`
RELEASE=`cat $(FILE) | cut -f3 -d.`

all: clean mvendor msrc

clean:
	rm build/* -R -f

mvendor:
	mkdir build/vendor
	cp -r vendor/* build/vendor/

mcss:
	mkdir build/css
	cp -r css/* public/css

mphp:
	cp *.php public/

msrc:
	cp -r src/* build/

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
