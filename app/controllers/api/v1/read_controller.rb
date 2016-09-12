class Api::V1::ReadController < ApplicationController
  skip_before_action :require_login

  def update
    link = Link.find(params[:id])
    render json: link.mark_read
  end

end
