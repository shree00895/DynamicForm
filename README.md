### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Approach 

I have used "react-hook-form" library to implement dynamic form. It provides \
us the functionalities like registering an input field to the form, wheather \
form is in submitting state, handle submit method where we get all the data \
that user has entered. 

1. On landing page I am taking json file as an input which contains the form fields. \
   Now I am storing that schema to the redux store, so that I will be able to use that \
   in DynamicForm component.

2. Input tag already has attributes type, which then automatically gives you respective \
   input field. There are some input type such as dropdown, radio button or checkbox which \
   works differently than other input types. So, for them created separate component and \
   handled them separately.

3. Using "react-hook-form" handling of validations became simple and could effectively present \
   it on UI.

4. Used Material UI to change the theme of the application.

### Assumption

Example given in the case study for validating username is 

"validation": {
    "minLength": 3,
    "maxLength": 20
}

Assuming validation field to be as below, so that we can handle errors effectively

"validation": {
    "minLength": {
        "value": 3,
        "message": "username must be at least 3 characters"
    },
    "maxLength": {
        "value": 20,
        "message": "username must be at maximum 20 characters"
    }
}

