Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :shows, only: [:index, :show, :create]
    resources :movies, only: [:index, :show, :create]
    resources :follows, only: [:create, :destroy]
    resources :friends, only: [:create, :destroy]
  end 
end
