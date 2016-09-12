class Api::V1::UnreadController < ApplicationController

  def update
    link = Link.find(params[:id])
    render json: link.mark_unread
  end

end
