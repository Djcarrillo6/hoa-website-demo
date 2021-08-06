
#!/usr/bin/env bash

git add . --all
git commit -m "DC - $1"
git status
git push -u origin vercel-staging