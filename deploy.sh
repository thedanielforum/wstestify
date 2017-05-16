#!/usr/bin/env bash

yarn run build

gsutil rsync -R build gs://www.wstestify.com

gsutil -m acl set -R -a public-read gs://www.wstestify.com
