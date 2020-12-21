json.extract! to_do_item, :id, :user, :title, :description, :status, :created_at, :updated_at
json.url to_do_item_url(to_do_item, format: :json)
