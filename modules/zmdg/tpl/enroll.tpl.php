<?php
?>
<!DOCTYPE html>
<html class="no-js">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>潍坊少儿编程培训报名</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="<?=$theme_url?>/programme/libs/font-awesome/css/font-awesome.min.css">
    <link href="<?=$theme_url?>/programme/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?=$theme_url?>/programme/css/styles.css" rel="stylesheet">
    <style>
        select {
            display: block;
            width: 100%;
            padding: 10px;
            height: 40px;
            border-radius: 4px;
            margin-bottom: 10px;
            background: #1d6fa5;
            color: #fff;
            transition: .5s ease all;
        }
    </style>
</head>
<body>
<div id="mobile-menu-open" class="shadow-large">
    <i class="fa fa-bars" aria-hidden="true"></i>
</div>

<!-- End #mobile-menu-toggle -->
<header>
    <div id="mobile-menu-close">
        <span>Close</span>
        <i class="fa fa-times" aria-hidden="true"></i>
    </div>
    <ul id="menu" class="shadow">
        <li>
            <a href="/" class="no-scroll">首页</a>
        </li>
        <li>
            <a href="#contact">报名咨询</a>
        </li>
    </ul>
</header>



<div id="about">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h2 class="heading">报名条件</h2>
            </div>
            <div class="col-md-8">
                <p><strong>为保证教学质量，报名需满足以下条件：</strong></p>
                <p>
                    小学三年级以上
                </p>
                <p>
                    按照老师要求认真学习英语和数学
                </p>
                <p>
                    按照老师要求认真记笔记
                </p>
                <p>
                    准备好笔记本电脑
                </p>
            </div>
        </div>
    </div>
</div>

<div id="contact">
    <h2>请填写以下内容完成报名</h2>
    <div id="contact-form">
        <form method="POST" class="form-horizontal" action="/enroll">

            <input type="number" name="tel" placeholder="家长手机号" required=required/>
                <select name="grade"  required="required">
                    <option>---请选择学生年级---</option>
                    <option value="三年级">三年级</option>
                    <option value="四年级">四年级</option>
                    <option value="五年级">五年级</option>
                    <option value="六年级">六年级</option>
                    <option value="更高年级">更高年级</option>
                </select>

            <select name="course">
                <option>---请选择课程---</option>
                <option value="编程">少儿编程</option>
                <option value="咏春">咏春拳</option>
            </select>

            <button type="submit">提交</button>
        </form>
    </div>
    <!-- End #contact-form -->
</div>
<!-- End #skills -->


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

<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="<?=$theme_url?>/programme/js/scripts.min.js"></script>
<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>

</script>
</body>

</html>