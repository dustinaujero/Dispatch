class FixServers < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :owner_id, :string

    add_column :servers, :ownder_id, :integer
  end
end
