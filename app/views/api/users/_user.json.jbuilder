json.set! :currentUser do
  json.extract! user, :id, :username
end

json.stocks do
  user.stocks.each do |stock|
    json.set! stock.ticker_id do
      json.extract! stock, :id, :ticker_id, :purchase_cost, :amount
    end
  end
end
