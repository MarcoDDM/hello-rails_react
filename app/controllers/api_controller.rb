class ApiController < ApplicationController
  def greetings
    render json: { greeting: Message.order("RANDOM()").first.content }
  end
end
