# psp.shared

add to config.rb:

get 'styleguide' => 'styleguide#index'
get 'styleguide/:theme' => 'styleguide#show', :as => 'styleguide_theme'

# test app (prosper directives):
get 'test' => 'test#seed'
