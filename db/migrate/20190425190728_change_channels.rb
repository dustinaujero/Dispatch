class ChangeChannels < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :server_id, :integer

    add_column :channels, :server_id, :integer
  end
end
