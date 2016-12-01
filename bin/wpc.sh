#!/bin/sh
# add local and global node_modules to the path
# https://gist.github.com/branneman/8048520#4-the-environment

# find absolute path to node_modules/wpc/bin/wpc-cli.js
cli=$(node -e "console.log(require('path').resolve(require('fs').realpathSync('$0'), '../wpc-cli.js'))")

cmd=$($cli $@)
if [ $? -eq 0 ] # continue only if wpc-cli exits with 0
then
  echo "\n\033[0;36m$cmd\033[0m\n"
  # echo $cmd | sh
  sh -c "$cmd"
else # just show the wpc-cli message in red
  echo "\033[0;31m$cmd\033[0m"
fi

exit $?
