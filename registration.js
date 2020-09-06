function SubmitForm(){
    var elem = event.currentTarget;
    var elements = elem.closest('div[name="parent-box"]').querySelectorAll('input[class="input"]');
    if (elements != null)
        alert("Successfully Submited");
    else
        alert('Invalid searching.');
}