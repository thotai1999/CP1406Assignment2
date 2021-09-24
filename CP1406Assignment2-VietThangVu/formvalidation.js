function formValidate() {
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    var interest = document.forms["form"]["interest"].value;
    var birthday = document.forms["form"]["birthday"].value;
    alert("Thank you for signing up for the Powell Fashion Clothing Weekly newsletter."+
    "\nWe have added the following information to our files regarding your interests:"+
    "\nName: " + name +
    "\nEmail: " + email +
    "\nProduct Interests: " + interest +
    "\nBirthday: " + birthday);
    return true;
}