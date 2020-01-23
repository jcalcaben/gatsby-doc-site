#!/bin/bash

counter=1
while [ $counter -le 500 ]
do
    curl 'https://jaspervdj.be/lorem-markdownum/markdown.txt' > "page-${counter}.md"
    ((counter++))
done

echo "Done"