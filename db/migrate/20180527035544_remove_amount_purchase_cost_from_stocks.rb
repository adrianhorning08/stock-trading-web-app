class RemoveAmountPurchaseCostFromStocks < ActiveRecord::Migration[5.1]
  def change
    remove_column :stocks, :purchase_cost, :integer
    remove_column :stocks, :amount, :integer
  end
end
