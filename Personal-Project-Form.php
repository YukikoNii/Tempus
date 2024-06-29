<html>
    <head>
        <meta charset = "utf-8">
    </head>

    <body>
        <?php 
            mb_language("English");
            mb_internal_encoding("UTF-8");

            $to = "NIIY64308@gmail.com";
            $from = $_POST['email'];
            $subject = $_POST['name'];
            $message = $_POST['message'];
            $headers = "From:" . $from; 

            if(mail($to,$subject,$message,$headers))
            {
                echo"success";
            }
        ?>

    </body>


</html>
