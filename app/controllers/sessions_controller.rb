class SessionsController < ApplicationController
  skip_before_action :require_login

  def new
  end

  def create
    @user = User.find_by(email: params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to @user
    else
      flash.now[:error] = 'Please make sure all fields are correct...'
      render(:new)
    end
  end

  def destroy
    session.clear
    redirect_to login_path
  end

end
