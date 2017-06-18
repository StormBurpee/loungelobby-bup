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
