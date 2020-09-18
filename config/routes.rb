Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
<<<<<<< HEAD
    resources :users, only: [:create, :index, :show]
=======
    resources :users, only: [:create, :show]
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
    resource :session, only: [:create, :destroy, :show]
    resources :shows, only: [:index, :show, :create]
    resources :movies, only: [:index, :show, :create]
    resources :follows, only: [:create, :destroy]
<<<<<<< HEAD
    resources :friends, only: [:create, :destroy]
=======
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
  end 
end
