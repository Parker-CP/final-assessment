class UserController < ApplicationController

  def new
    @user = current_user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to @user
    else
      flash.now[:error] = @user.errors.full_messages.join(', ')
      render :new
    end
  end

end
