#!/bin/sh
# add local and global node_modules to the path
# https://gist.github.com/branneman/8048520#4-the-environment

dir=$(dirname $0)

cli="$dir/wpc-cli.js"

cmd=$($cli $@)
echo "\033[0;36m$cmd\033[0m"
# echo $cmd | sh
sh -c "$cmd"

exit

if [ ! -x "$(command -v webpack)" ]
then
  echo "Missing webpack in path. Install it with yarn or npm"
  exit 1
fi

if [ ! -x "$(command -v webpack-dev-server)" ]
then
  echo "Missing webpack-dev-server in path. Install it with yarn or npm"
  exit 1
fi

if [ ! -z "NODE_PATH" ]
then
  local_node_modules="$PWD/node_modules"
  global_node_modules=$(dirname $(dirname $(dirname $(realpath `which webpack`))))
  wpc=$(dirname $(dirname $(dirname $(realpath $0))))
  export NODE_PATH="$local_node_modules:$global_node_modules:$wpc"
fi
# echo $NODE_PATH
export NODE_ENV=${NODE_ENV:-development}

if [ "$NODE_ENV" = "development" ]
then
  webpack-dev-server $@
else
  webpack $@
fi