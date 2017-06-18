FILE=version
MAJOR=`cat $(FILE) | cut -f1 -d.`
MINOR=`cat $(FILE) | cut -f2 -d.`
RELEASE=`cat $(FILE) | cut -f3 -d.`

all: clean mvendor mcss mphp

clean:
	rm public/* -R -f

mvendor:
	mkdir public/vendor
	cp -r vendor/* public/vendor/

mcss:
	mkdir public/css
	cp -r css/* public/css

mphp:
	cp *.php public/

build: all release
	git add *
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
