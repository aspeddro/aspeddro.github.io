server:
	bundle exec jekyll serve

bundle:
	./node_modules/.bin/esbuild assets/js/main.js --minify --outfile=assets/js/main.min.js