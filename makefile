install: #йоу йоу выполнение чота там полезного npm ci
	npm ci
brain-games: #игра кальмар
	node bin/brain-games.js
publish: #хаха публиш название смешное 
	npm publish --dry-run
lint: #линт линт линт линт
	npx eslint
brain-even:
	node bin/brain-even.js