Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api do 
    resources :users, only: [:show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
  end

end
