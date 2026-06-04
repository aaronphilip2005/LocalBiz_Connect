function showMessage(){
    document.getElementById("message").textContent="Thank you for visiting LocalBiz Connect";
}
function submitEnquiry(event){
    event.preventDefault();
    const Name=document.getElementById("Name").value.trim();
    const Email=document.getElementById("Email").value.trim();
    const service=document.getElementById("service").value.trim();
    const message=document.getElementById("message").value.trim();
    const formMessage=document.getElementById("formMessage");
    if(Name==="" || Email==="" || service==="" || message===""){
        formMessage.textContent="Please fill all the fields before submitting";
        formMessage.style.color="red";
        return;
    }
    formMessage.textContent = "Thank you, " + name + "! Your enquiry has been recorded for the Day 2 demo.";
    formMessage.style.color = "#123c69";
}