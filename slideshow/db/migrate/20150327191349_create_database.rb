class CreateDatabase < ActiveRecord::Migration
  def change
    create_table :slides do |t|
      t.text :title, default: ""
      t.text :slide_text
      t.integer :slide_order
    end
  end
end


