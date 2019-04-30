class RemoveTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :dms
    drop_table :directs
  end
end
