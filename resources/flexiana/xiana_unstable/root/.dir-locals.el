((nil . ((cider-clojure-cli-aliases   . "-M:dev")
         (cider-preferred-build-tool  . clojure-cli)
         (cider-default-cljs-repl     . shadow)
         (eval . (progn
                   (make-variable-buffer-local ' cider-jack-in-nrepl-middlewares)
                   (add-to-list 'cider-jack-in-nrepl-middlewares "shadow.cljs.devtools.server.nrepl/middleware"))))))
