class StyleguideController < ApplicationController
  include StyleguideHelper

  def index
    redirect_to styleguide_theme_path theme: theme_names.first
  end

  def show
    @theme = params[:theme]
    render layout: nil
  end
end
