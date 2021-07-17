<?php
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $lemail = $_POST['email'];
    $country= $_POST['country'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $laddress = $_POST['address'];
    $pin = $_POST['pin'];
    $phone = $_POST['phone'];
    $whatsapp = $_POST['whatsapp'];
    $college= $_POST['college'];
    $year= $_POST['year'];
    $stream= $_POST['stream'];
//    $shirt= $_POST['shirt'];
    $teamname = $_POST['teamname'];
    $teamnum = $_POST['teamnum'];
    $tmn1 = $_POST['teammemname1'];
    $tme1 = $_POST['teammememail1'];
    $tmn2 = $_POST['teammemname2'];
    $tme2 = $_POST['teammememail2'];
    $tmn3 = $_POST['teammemname3'];
    $tme3 = $_POST['teammememail3'];
    $tmn4 = $_POST['teammemname4'];
    $tme4 = $_POST['teammememail4'];
    $tme4 = $_POST['teammememail4'];
    $tme4 = $_POST['teammememail4'];
    $tme4 = $_POST['teammememail4'];
    $tme4 = $_POST['teammememail4'];
    $tme4 = $_POST['teammememail4'];
    $name = $firstname + $lastname;

    $connectx = new mysqli('localhost', 'root', '', 'registration');
    if ($connectx -> connect_error){
        die('connectxection to database failed: ' .$connectx->connect_error);
    }else{
        $xyz = $connectx->prepare("insert into team_info(l_name, l_email, teamsize, member_name_1, member_email_1, member_name_2, member_email_2, member_name_3, member_email_3, member_name_4, member_email_4, tname) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $xyz->bind_param("ssisssssssss", $name, $lemail, $teamnum, $tmn1, $tme1, $tmn2, $tme2, $tmn3, $tme3, $tmn4, $tme4, $teamname);
        $execval = $xyz->execute();
        echo $execval;
        $xyz->close();
        $xya = $connectx->prepare("insert into l_info(l_name, teamsize, address, city, state, country, pin, mob_no, wapp_no, college, year, stream) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $xya->bind_param("sissssiiisis", $name, $teamnum, $laddress, $city, $state, $country, $pin, $phone, $whatsapp, $college, $year, $stream);
        $execvala = $xya->execute();
        echo $execvala;
        echo "          ............Registration successful............";
        $xya->close();
        $connectx->close();
    }
?>