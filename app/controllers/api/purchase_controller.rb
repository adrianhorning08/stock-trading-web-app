class Api::PurchaseController < ApplicationController
  def create
    @purchase = Purchase.new(purchase_params)
    if @purchase.save
      render 'api/purchases/show'
    else
      render json: @purchase.errors.full_messages, status: 422
    end
  end

  private
  def purchase_params
    params.require(:purchase).permit(:stock_id, :price, :amount)
  end
end
