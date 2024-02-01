Rails.application.routes.draw do
  get '/api/greetings', to: 'api#greetings'

  get '/*path', to: 'static#index', constraints: ->(request) { request.format.html? }
end
