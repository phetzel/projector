class Show < ApplicationRecord
    validates  :movie_id, :date, :time, :lat, :lng, presence: true
end

