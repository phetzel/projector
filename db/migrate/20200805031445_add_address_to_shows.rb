class AddAddressToShows < ActiveRecord::Migration[5.2]
  def change
    add_column :shows, :address, :string
  end
end
