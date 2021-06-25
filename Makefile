server:
	bundle exec jekyll serve --livereload

bundle:
	./node_modules/.bin/esbuild assets/js/main.js \
	--target=esnext \
	--bundle \
	--minify \
	--splitting \
	--format=esm \
	--outdir=dist/

legacy:
	./node_modules/.bin/esbuild assets/js/main.js \
	--target=es6 \
	--minify \
	--bundle \
	--outfile=dist/main.legacy.js