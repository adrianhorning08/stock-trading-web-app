class Api::StocksController < ApplicationController
  def create
    @stock = Stock.new(stock_params)
    if @stock.save
      render 'api/stocks/show'
    else
      render json: @stock.errors.full_messages, status: 422
    end
  end

  def update
    @stock = Stock.find_by(id: params[:id])

    if @stock.update(stock_params)
      render 'api/stocks/show'
    else
      render json: @stock.errors.full_messages, status: 422
    end
  end
  # this and that

  # def destroy
  #   @stock = Stock.find_by(id: params[:id])
  #   @stock.destroy
  #   # render "api/stocks/show"
  # end

  private
  def stock_params
    params.require(:stock).permit(:ticker_id, :purchase_cost, :amount, :user_id)
  end
end
