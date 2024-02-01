class ApiController < ApplicationController
  def greetings
    render json: { greeting: Greeting.order('RANDOM()').first.message }
  end
end
