Rails.application.routes.draw do

  root "links#index"

  get '/login', to: "sessions#new"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  resources :users, only: [:new, :create, :show]

  namespace :api do
    namespace :v1, defaults: {format: :json} do
      resources :links, only: [:index, :create, :update]
      patch '/links/:id/read',to: "read#update"
      patch '/links/:id/unread', to: "unread#update"
    end
  end
end
