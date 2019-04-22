class CreateDMs < ActiveRecord::Migration[5.2]
  def change
    create_table :directs do |t|
      t.integer :userA, null: false
      t.integer :userB, null: false
      t.index [:userA, :userB], unique: true
    end
  end
end
