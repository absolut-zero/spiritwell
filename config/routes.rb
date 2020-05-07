Rails.application.routes.draw do
  root to: 'pages#home'

  get 'blog', to: 'pages#blog', as: :blog
  get 'contact', to: 'pages#contact', as: :contact
  get 'faq', to: 'pages#faq', as: :faq
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
