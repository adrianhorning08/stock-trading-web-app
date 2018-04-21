# this will be handled by the usersReducer
json.user do
  json.extract! user, :id, :username
end
