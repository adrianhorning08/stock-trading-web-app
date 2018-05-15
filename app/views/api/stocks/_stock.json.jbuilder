json.set! :stock do
  json.extract! stock, :ticker_id, :amount, :user_id, :purchase_cost
end
