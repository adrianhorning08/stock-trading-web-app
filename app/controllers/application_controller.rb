class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :current_user_for_reload

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def current_user_for_reload
    @current_user ||= User.find_by_session_token(session[:session_token])
    render json: @current_user
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def ensure_logged_in
    render json: { base: ['Invalid credentials'] }, status: 401 unless logged_in?
  end
end
