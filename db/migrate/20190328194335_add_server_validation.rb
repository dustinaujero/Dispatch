class AddServerValidation < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :ownder_id, :integer

    add_column :servers, :owner_id, :integer, null: false
  end
end
