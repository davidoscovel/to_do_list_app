Rails.application.routes.draw do
  resources :to_do_items
  root 'home#index'
  get 'to_do_items', to: 'home#to_do_items'
  resources :home, :to_do_items
end
