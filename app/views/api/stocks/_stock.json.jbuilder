json.set! :stock do
  json.extract! user, :ticker_id, :amount, :user_id, :purchase_cost
end
