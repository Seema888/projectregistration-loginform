function validation()
{
	var name=document.myform.t1.value;
	var password=document.myform.t2.value;
	var confirmpassword=document.myform.t3.value;
	
	if(name==null||name=="")
	{
		alert("Name can't be blank");
		return false;
	}
	else if(password==confirmpassword)
	{
		return true;
	}
	else
		alert("password should be same");
}
