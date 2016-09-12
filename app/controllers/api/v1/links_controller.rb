class Api::V1::LinksController < ApplicationController
  skip_before_action :require_login

  def create
    link = Link.new(link_params)
    link.user_id = current_user.id
    if link.save
      render json: link
    else
      render json: {error: "invalid Data"}
    end
  end

  def index
    render json: current_user.links
  end

  def destroy
    render json: Link.destroy(params[:id])
  end

  private

  def link_params
    params.permit(:title, :url)
  end

end
