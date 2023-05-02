<<<<<<< HEAD
# IpChecker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
=======
### Objective

Your task is to connect to an external API to retrieve IP address information and display it like in the provided designs.

### Brief

The challenge is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. You will find all the required assets in the `/images` folder. The assets are already optimized. To get the IP address location, you'll be using the Wookie IP API:

    https://wookie.codesubmit.io/ipcheck?ip=<IP_ADDRESS>

An example response for IP 8.8.8.8

```json
{
	"as": {
		"asn": 15169,
		"domain": "https://about.google/intl/en/",
		"name": "GOOGLE",
		"route": "8.8.8.0/24",
		"type": "Content"
	},
	"ip": "8.8.8.8",
	"isp": "Google LLC",
	"location": {
		"city": "Mountain View",
		"country": "US",
		"geonameId": 5375480,
		"lat": 37.38605,
		"lng": -122.08385,
		"postalCode": "94035",
		"region": "California",
		"timezone": "-08:00"
	}
}
```

For authentication, pass the `"Authorization: Bearer WookieIP2022"` header.
Cache the response in browser storage (local storage, session storage) to avoid making too many requests to the API.

To generate the map, we recommend using [LeafletJS](https://leafletjs.com/), but you are free to use any mapping library of your choice.

Your users should be able to:

-   View the optimal layout for each page depending on their device's screen size
-   See hover states for all interactive elements on the page
-   See their own IP address on the map on the initial page load
-   Search for any IP addresses and see the key information and location




