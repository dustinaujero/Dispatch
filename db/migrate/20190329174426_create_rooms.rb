class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :channel_name, null: false
      t.integer :server_id, null: false
      t.timestamps
    end

    add_index :moderators, [:moderator_id, :server_id], unique: true

    create_table :nicknames do |t|
      t.integer :user_id, null: false 
      t.integer :channel_id, null: false 
      t.string :nickname, null: false 
      t.index [:user_id, :channel_id], unique: true 
    end
  end
end
