# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Stock.delete_all

User.create!(
  username: 'test',
  password: 'password'
)

Stock.create!(
  ticker_id: 'FB',
  purchase_cost: 10,
  amount: 1000,
)

Stock.create!(
  ticker_id: 'AMZN',
  purchase_cost: 1,
  amount: 100,
)
