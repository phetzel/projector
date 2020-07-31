class Movie < ApplicationRecord
    validates  :title, :run_time, presence: true
end
