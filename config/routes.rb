Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  # mount ActionCable.server => '/cable'

  namespace :api do 
    get '/servers/:id/invite', to: 'servers#getCode', as: 'server_getCode'
    post '/servers/:id/invite', to: 'servers#join', as: 'server_join'
    get 'channels/all', to: 'channels#all', as: 'all_channels'
    resources :users, only: [:show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy] do 
      resources :channels, only: [:index, :create]
    end
    resources :channels, only: [:show, :update, :destroy] do 
      resources :messages, only: [:index, :create]
    end
    resources :messages, only: [:show, :update, :destroy]
  end

end
