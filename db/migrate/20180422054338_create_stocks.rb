class CreateStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
      t.string :ticker_id, null: false
      t.integer :purchase_cost, null: false
      t.integer :amount, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :stocks, :user_id
  end
end
