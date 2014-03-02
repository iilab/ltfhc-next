.PHONY: test
test:
		@NODE_ENV=test ./node_modules/cucumber/bin/cucumber.js -f pretty features \
				-r features/support/world.js -r features/support/hooks.js -r features/step_definitions

.PHONY: clean
clean:
		kanso deletedb test


.PHONY: install
install: 
		npm cache clean
		npm install
		npm install cucumber

