class CreateDms < ActiveRecord::Migration[5.2]
  def change
    create_table :dms do |t|
      t.integer :direct_id, null: false
      t.integer :user_id, null: false
      t.string :body, null: false
      t.timestamps
    end
  end
end
