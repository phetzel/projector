json.show do
  json.partial! '/api/shows/showing', show: @show
end