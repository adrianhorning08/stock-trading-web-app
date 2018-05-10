class Api::StocksController < ApplicationController
  def create
    @stock = Stock.new(stock_params)
    if @stock.save
      render 'api/stocks/show'
    else
      render json: @stock.errors.full_messages, status: 422
    end
  end

  private
  def stock_params
    params.require(:user).permit(:ticker_id, :purchase_cost, :amount, :user_id)
  end
end
