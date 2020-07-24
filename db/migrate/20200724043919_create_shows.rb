class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :title, null: false
      t.integer :movie_id, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.string :address, null: false 

      t.timestamps
    end
  end
end
