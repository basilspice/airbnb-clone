## LIVE

[Airbnb-Clone Live Site](https://property-renter.vercel.app/)

## About

This app was made with the help of [CODEWITHANTONIO](https://youtu.be/c_-b_isI4vg)

This is a full stack application using Next/MongoDB with Vercel being used for deployment

This app uses the following:

-Tailwind CSS with animations  
-NextAUTH  
-Next  
-MondoDB  
-OAuth using Google and Github  
-Image upload handled by cloudinary  

## How  It Works

This Airbnb clone will allow you to create a new account, or you can use Github OR Google auth for account creation

After creating an account you gain access to the logged in navbar which will show you either your Profile Pic, if you have used Google/Git, or render your name if account was made using website.
Once logged in, you will now have addiontal options rendered instead of the Login | Signup options
My Trips will take you to the page that has all of your trips planned, showing you propeties that you have reserved
My Favorites will show you the list of properties that you have favorited
My Properties will show you all of the property listings that you have available to rent
My Reservations will show you reservations people have made with your properties that you have available
The current users email address
Logout button that will logout the user
Clicking on the Airbnb logo will take you to the "homepage"

Properties will have a unique url id so listings can be shared to random users and always show the same propery based of off the id.
https://property-renter.vercel.app/listings/658609354b44b3f67abd9397

From the properties screen a user can reserve said property for any amount of selected time. Once the second date is selected it wil calculate your total amount based off of the selected time

Hitting reserve (while logged in) will render a small popup modal with a "Success" message
If the user is not logged in, the Login modal will popup asking the user to login

Hitting the favorites option in the navbar will take you to your "hearted" properties

Guests OR the Property owner can cancel reservations.

## Making a reservation

Anybody can see what dates are available on a listing based off the calendar
If a user is not logged in and selects reserve they will be take to the login screen

If the user is logged in and the reservation was successful they will get a message that will show a success. 
The page will than redirect the user to their trips page

## Search bar

Using the search bar users can narrow down the available options by 
Location, Available Dates, how many Guests

Using the calender users can select the stay duration, and if any of those dates are already reserved they will not render as an option to rent




## Creating a listing

Hitting the Airbnb button will start the process of creating property listing
If the user is not logged in the login modal will popup instead

First step will be to select a category
Than you will select the Location
Users can navigate back or hit next
You will than select the amount of Guests, Bathrooms, and Rooms
An Image uploader (using cloudinary) will popup to upload a single image of the property
Title and description need to be filled out
Finally set a price per night and your listing will be ready to go
A listing created success message will popup and you will be take back to the first step of the listing creation process

## Getting Started

```shell
git clone https://github.com/basilspice/airbnb-clone.git
```

### Install packages

```shell
npm i
```

### Required .env files


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `build`         | Deploys production build to Vercel       |
