class Api::V1::LinksController < ApplicationController
  skip_before_action :require_login

  def create
    link = Link.new(link_params)
    link.user_id = current_user.id
    if link.save
      render json: link
    else
      render json: {error: "invalid Data"}
      render status: 400
    end
  end

  def update
    render json: Link.update(params[:id], link_params)
  end

  def index
    render json: current_user.links
  end

  private

  def link_params
    params.permit(:title, :url)
  end

end
