class Movie < ApplicationRecord
    validates  :title, :run_time, presence: true
    has_many :shows
end
