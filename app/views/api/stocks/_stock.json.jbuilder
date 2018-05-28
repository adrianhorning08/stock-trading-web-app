json.set! :stock do
  json.extract! stock, :ticker_id, :amount, :user_id, :purchase_cost

end

# need to add purchases here
# actually, this is probably the place you can format the purchases
# into an object
# another message
