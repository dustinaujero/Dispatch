class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, uniqueness: true
      t.string :username, null: false, uniqueness: true
      t.string :password_digest, null: false
      t.string :session_token,  null: false
      t.string :img_url, null: false
      t.timestamps
    end
  end
end
