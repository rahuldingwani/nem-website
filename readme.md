
## Build Instructions

##### You will need to install these, and should probably do so globally. (These instructions are for a fresh install of OSX El Capitan)
1. Install xcode:
[xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
Open xcode once it is installed, open xcode, agree to license agreements, then close xcode.

2. Install Homebrew
Open up a terminal window, and paste this in :
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
3. Install Github Desktop - 
[Github](https://desktop.github.com)

4. Install nodejs and npm
```
brew install node
```
5. Install bower
``` 
npm install -g bower
```
6. Install pip
``` 
sudo easy_install pip
```
7. install virtualenv
``` 
sudo pip install virtualenv
```
* [NodeJS](https://nodejs.org/en/)
* [Git](https://git-scm.com/)
* bower package manager
* virtualenv

##### Once Those are installed, get a virtual environment up, and install the site and it's dependencies. Paste these into the command line, one line at a time.

```
    virtualenv nemio
    cd nemio
    source bin/activate
    git clone the_repo_you_are_reading_this_at
    cd the_repo_you_are_reading_this_at
    bower install
    npm install
```
You must add a config file, this houses the google docs info.
Make sure the config file is at the same level as `gulpfile.js`
```
nano config.json
```
you must either create a google doc, or get the keys from Saul.
I will fix this in the future so it can be built without worrying about the `config.json` file.

##### After the config file is in place

```
foundation watch
```
Now you should have a webpage that opened to `localhost:8760`.
This port can be changed in `gulpfile.js`.

To build for production, use:
```
foundation watch --production
```
This will minify JS, compress images, etc.

Take the contents of the `dist` folder, and place them on your server, easy as that :)


*Note the majority of the gulpfile, and most of the code, is thanks to [Zurb Foundation](https://github.com/zurb/foundation-zurb-template)*
