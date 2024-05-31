function getFormvalue() {
    // Accessing the input fields by their names
    var firstName = document.forms["form1"]["fname"].value;
    var lastName = document.forms["form1"]["lname"].value;

    // Concatenating the first and last names
    var fullName = firstName + " " + lastName;

    // Displaying the full name in an alert
    alert(fullName);
}
