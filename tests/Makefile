
.PHONY: test
test:
		@NODE_ENV=test ./node_modules/.bin/cucumber.js -f pretty features \
				-r features/support/world.js -r features/support/hooks.js -r features/step_definitions

.PHONY: install
install: 
		npm install --dev

