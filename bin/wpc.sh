#!/bin/sh
# add local and global node_modules to the path
# https://gist.github.com/branneman/8048520#4-the-environment

dir=$(dirname $0)
cli="$dir/wpc-cli.js" # local

if [ ! -a "$cli" ]
then
  cli="wpc-cli" # global
fi

cmd=$($cli $@)
echo "\033[0;36m$cmd\033[0m"
# echo $cmd | sh
sh -c "$cmd"

exit
