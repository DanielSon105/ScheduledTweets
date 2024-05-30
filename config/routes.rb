# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               password: 'secret',
               confirmation: 'verification',
               unlock: 'unblock'
             },
             controllers: {
               registrations: 'users/registrations',
               sessions: 'users/sessions',
               confirmations: 'users/confirmations',
               passwords: 'users/passwords',
               unlocks: 'users/unlocks'
             }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check
  
  get 'about-us', to: 'about#index', as: :about

  # Defines the root path route ("/")
  # root to: 'dashboard#index'
  root to: 'main#index'
end
