class CreatePurchases < ActiveRecord::Migration[5.1]
  def change
    create_table :purchases do |t|
      t.integer :price, null: false
      t.integer :amount, null: false
      t.integer :stock_id, null: false
      t.timestamps
    end
  end
end
