class CreateToDoItems < ActiveRecord::Migration[6.1]
  def change
    create_table :to_do_items do |t|
      t.string :user
      t.string :title
      t.string :description
      t.string :status

      t.timestamps
    end
  end
end
