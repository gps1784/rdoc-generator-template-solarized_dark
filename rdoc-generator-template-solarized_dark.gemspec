require_relative 'lib/rdoc/generator/template/solarized_dark/version'

Gem::Specification.new do |spec|
  spec.name          = "rdoc-generator-template-solarized_dark"
  spec.version       = RDoc::Generator::Template::SolarizedDark::VERSION
  spec.authors       = ["Grant Sparks"]
  spec.email         = ["grantpatricksparks@gmail.com"]

  spec.summary       = 'A gem (with virtually no ruby) that adds a simple, Solarized-style color scheme and theme to RDoc'
  #spec.description   = %q{TODO: Write a longer description or delete this line.}
  spec.homepage      = "https://github.com/gps1784/rdoc-generator-template-solarized_dark"
  spec.license       = "MIT"
  #spec.required_ruby_version = Gem::Requirement.new(">= 2.3.0")

  #spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage #"TODO: Put your gem's public repo URL here."
  spec.metadata["changelog_uri"] = spec.homepage #"TODO: Put your gem's CHANGELOG.md URL here."

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "rake", "~> 12.0"
  spec.add_development_dependency "minitest", "~> 5.0"

  spec.add_runtime_dependency "rdoc", "~> 6.0"
end
