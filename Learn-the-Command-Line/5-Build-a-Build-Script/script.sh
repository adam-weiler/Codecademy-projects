#Identifies type of script.
#!/bin/bash

#Welcomes user to script.
echo "🐺Hello User!🐺"

#Stores line 1 from the changelog.md. ie: ## 11.2.3
firstline=$(head -n 1 source/changelog.md)
# echo "Firstline:" $firstline

#Splits the string into an array. ie: [##][11.2.3]
read -a splitfirstline <<< $firstline
# echo "Splitfirstline:" ${splitfirstline[0]}

#Stores the version number. ie: 11.2.3
version=${splitfirstline[1]}
echo "You are building version" $version

#Asks user to confirm they want to copy files into build directory.
echo "Do you want to continue? y/n"
read versioncontinue

if [ "$versioncontinue" == "y" ] #If user entered "y".
then
  for filename in source/* #Loops through each filename in source directory.
  do
  	if [ "$filename" == "source/secretinfo.md" ] #If filename is "secretinfo.md".
    then
    	#We are not copying this file.
  		echo "Not copying" $filename
    else #Else filename is something else.
    	#We are copying this file.
    	echo "Copying" $filename
      cp $filename build/.
    fi
  done
  
  #Changes to build directory.
  cd build/
  echo "Build version $version contains:"
  #Lists all files in build directory.
  ls
  #Changes back to main directory.
  cd ..
  
else #Else user did not enter "y".
	#Nothing happens.
  echo "Please come back when you are ready."
fi
