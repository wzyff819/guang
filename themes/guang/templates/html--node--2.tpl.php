<?php
require dirname(__DIR__).'/programme/share/jssdk.php';
$jssdk = new JSSDK("wx6ddcdf240bf7a436", "393f7bc6d15cc9ef7bd3f9b78e49ccf0");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html class="no-js">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>潍坊咏春拳培训-少儿、成人咏春拳招生</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link href="<?=$theme_url?>/programme/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container-fluid">

    <?php foreach (range(1,7) as $img):?>
     <img src="<?=$theme_url?>/wingchun/<?=$img?>.jpg" class="img-responsive">
    <?php endforeach;?>
</div>

<footer>
    <div class="container">
        <div class="row">
            <div class="col-sm-5 copyright">
                <p>
                    Copyright &copy; 2018 最美的光教育咨询
                </p>
            </div>
            <div class="col-sm-2 top">
                    <span id="to-top">
                        <i class="fa fa-chevron-up" aria-hidden="true"></i>
                    </span>
            </div>

        </div>
    </div>
</footer>
<!-- End footer -->


</body>

</html>