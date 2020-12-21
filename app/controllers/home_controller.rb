class HomeController < ApplicationController

  def to_do_items
    @to_do_items = ToDoItem.where(user: params[:user])
    render json: {data: @to_do_items}
  end

  def index
    @to_do_items = ToDoItem.all
  end

  def show
    @to_do_item = ToDoItem.find(params[:id])
  end

  def new
    @to_do_item = ToDoItem.new
  end

  def create
    @to_do_item = ToDoItem.create(to_do_params)
    if @to_do_item.save
      flash[:success] = "To do item successfully saved"
    else
      flash[:error] = "Error: To do item was not saved"
    end
  end

  def edit
    @to_do_item = ToDoItem.find(params[:id])
  end

  def update
    @to_do_item = ToDoItem.update(to_do_params)
    if @to_do_item.save
      flash[:success] = "To do item successfully updated"
    else
      flash[:error] = "Error: To do item was not updated"
  end

  def destroy
    @to_do_item = ToDoItem.find(params[:id]).destroy
  end

  private
    def to_do_params
      params.require(:user).permit(:title, :description, :status, :home)
    end
  end

end
