class CreateModerators < ActiveRecord::Migration[5.2]
  def change
    create_table :moderators do |t|
      t.integer :moderator_id, null: false
      t.integer :server_id, null: false
      t.timestamps
    end
  end
end
