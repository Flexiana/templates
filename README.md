# flexiana/templates

New templates using deps-new

## Usage

This is a template project for use with [deps-new](https://github.com/seancorfield/deps-new).
Assuming you have installed `deps-new` as your `new` "tool" via:

	clojure -Ttools install io.github.seancorfield/deps-new '{:git/tag "v0.5.1"}' :as new

As originally generated, it will produce a new library project when you run one of these:

	clojure -Sdeps '{:deps {io.github.flexiana/templates {:git/sha "<git-sha>"}}}' -Tnew create :template <template-name> :name <app-name>

\<git-sha> can be the sha from the most recent commit to the main branch.

## Available templates

### Xiana Template

    clojure -Sdeps '{:deps {io.github.flexiana/templates {:git/sha "b63986497f99a82d76d34e32571b755651be1975"}}}' -Tnew create :template flexiana/xiana :name coolapp

### Electric Template

    clojure -Sdeps '{:deps {io.github.flexiana/templates {:git/sha "b63986497f99a82d76d34e32571b755651be1975"}}}' -Tnew create :template flexiana/electric :name coolapp

Run this template project's tests (by default, this just validates your template's `template.edn`
file -- that it is valid EDN and it satisfies the `deps-new` Spec for template files):

    clojure -T:build test

## License

Copyright © 2023 Flexiana

_EPLv1.0 is just the default for projects generated by `deps-new`: you are not_
_required to open source this project, nor are you required to use EPLv1.0!_
_Feel free to remove or change the `LICENSE` file and remove or update this_
_section of the `README.md` file!_

Distributed under the Eclipse Public License version 1.0.
