class RemoveTimeFromShows < ActiveRecord::Migration[5.2]
  def change
    remove_column :shows, :time
  end
end
