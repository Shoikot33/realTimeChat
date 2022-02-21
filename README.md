# BakersApp
## Run

To run the project, first download it from GitHub or you can clone the repo using the [ssh URL](git@github.com:AppHouseBD/bakers.git).

The main code exists on `develop` branch, where all the developed codes are merged after testing. The `main` branch is used for production. 

After that, go to the root dir of the project and run:

    npm install

This will install all the necessary dependency. 

Then run:

    npm start

This will start a server on localhost, generally in the 3000 port. So you can find the website by going to [http://localhost:3000](http://localhost:3000)


### Converting SVG to React component

As we are using SVG for the icons, we need to convert it as React components, so that we can directly use them in our code and change the color, fill etc without any problem.

For that, we will use a command that will take the raw SVG and convert it into a component.

1. First put the SVG you want to use in the `src > svg` folder.
2. Second run the following command:

    npx @svgr/cli src/svg --out-dir src/Component/Icon --icon

This will convert the SVG to React component and put them inside `src > Component > Icon` folder.

We can now use Icons directly from that folder.
