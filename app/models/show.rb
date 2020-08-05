class Show < ApplicationRecord
    validates  :movie_id, :time, :date, :lat, :lng, :address, presence: true

    belongs_to :movie

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  
end

