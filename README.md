# psp.shared

add to config.rb:

get 'styleguide' => 'styleguide#index'
get 'styleguide/:theme' => 'styleguide#show', :as => 'styleguide_theme'

test app (prosper directives): 
get 'test' => 'test#seed'



example bower.json:
{
  "name": "psp.app43",
  "description": "the 43rd Prosper Rails App",
  "dependencies": {

    "psp.shared": "https://github.com/omancipator/psp.shared.git"

  },

  "devDependencies": {

  },
  "private": true,
  "ignore": [
  ]
}



* Dev Installation:
-- 'sudo npm install -g grunt-cli`
-- `cp .env.example .env` which copies environment variables used in development
-- `npm install`
-- `bundle install`
-- `bower install`


-- `grunt`

* Starting Dev Servers
-- rails s
-- node mock_server/app.js


* How to run the test suite
- e2e (Protractor)
-- ./node_modules/protractor/bin/webdriver-manager update
-- ./node_modules/protractor/bin/webdriver-manager start
-- ./node_modules/protractor/bin/protractor js_tests/e2e/protractor_conf.js

- unit (Karma)
-- ./node_modules/karma/bin/karma start karma_conf.js
