Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :shows, only: [:index, :show, :create]
    resources :movies, only: [:index, :show, :create]
  end 
end
