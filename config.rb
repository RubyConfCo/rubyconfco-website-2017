###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
page "/code_of_conduct.html", :layout => :otherlayout
page "/codigo-de-conducta.html", :layout => :otherlayout
page "/hotels.html", :layout => :otherlayout
page "/estudiantes.html", :layout => :otherlayout
page "/ambassadors.html", :layout => :otherlayout
page "/embajadores.html", :layout => :otherlayout
page "/faq.html", :layout => :otherlayout
page "/becas_diversidad.html", :layout => :otherlayout
page "/medellin.html", :layout => :otherlayout
page "/mentores.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'assets/stylesheets'

set :js_dir, 'assets/javascripts'

set :images_dir, 'assets/images'

set :fonts_dir, 'assets/fonts'

set :relative_links, true

set :haml, { :ugly => true, :format => :html5 }

set :build_dir, 'docs'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
