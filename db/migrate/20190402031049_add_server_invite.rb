class AddServerInvite < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :inv_code, :string, null: false
  end
end
