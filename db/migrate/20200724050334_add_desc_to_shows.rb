class AddDescToShows < ActiveRecord::Migration[5.2]
  def change
    add_column :shows, :desc, :text
    remove_column :shows, :title
  end
end
