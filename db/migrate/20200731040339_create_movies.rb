class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.time :run_time, null: false
      t.text :desc

      t.timestamps
    end
  end
end
