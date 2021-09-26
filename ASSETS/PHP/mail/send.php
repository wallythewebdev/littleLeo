<!-- Name : <?php print $_POST['name'];?><br>
Email : <?php print $_POST['email'];?><br>
Company : <?php print $_POST['company'];?><br>
Message : <?php print $_POST['userMessage'];?><br>



<?php
        $name = $_POST['name'];
        $email = $_POST['email'];
        $company = $_POST['company'];
        $message = $_POST['userMessage'];


        $to = "admin@littleleo.dev";
        $subject = "Email from my website";
       
        $body .= "\r\n Name: " . $name;
        $body .= "\r\n Company: " . $company;
	$body .= "\r\n Email: " . $email;
	$body .= "\r\n Message: " . $message;


        mail($to, $subject, $body);
    
?> -->