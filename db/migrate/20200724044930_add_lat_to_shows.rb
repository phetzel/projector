class AddLatToShows < ActiveRecord::Migration[5.2]
  def change
    add_column :shows, :lat, :float
    add_column :shows, :lng, :float
    remove_column :shows, :address
  end
end
