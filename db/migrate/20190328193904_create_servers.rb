class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :server_name, null: false
      t.string :owner_id, null: false
      t.string :img_url, null: false
      t.timestamps
    end
  end
end
