class Api::V1::UnreadController < ApplicationController

  def update
    idea = Link.find(params[:id])
    render json: link.mark_read
  end

end
