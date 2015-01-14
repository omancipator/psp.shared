module StyleguideHelper
  def theme_names
    Dir.glob(Rails.root.join('app', 'assets', 'stylesheets', 'shared', 'themes', '*')).select { |f| File::directory?(f) }.map { |f| File::basename(f) }.sort
  end
end