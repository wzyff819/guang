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
    <title>潍坊少儿编程培训</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="<?=$theme_url?>/programme/libs/font-awesome/css/font-awesome.min.css">
    <link href="<?=$theme_url?>/programme/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?=$theme_url?>/programme/css/styles.css" rel="stylesheet">
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
            <a href="#about">少儿编程</a>
        </li>
        <li>
            <a href="#education">学到的技能</a>
        </li>
        <li>
            <a href="#experience">课程内容</a>
        </li>

        <li>
            <a href="#skills">技能效果</a>
        </li>
        <li>
            <a href="/enroll" class="no-scroll">报名咨询</a>
        </li>
    </ul>
</header>
<!-- End header -->

<div id="lead">
    <div id="lead-content">
        <h1>潍坊首家少儿编程培训机构</h1>
        <h2>最美的光</h2>
        <a href="/enroll" class="btn-rounded-white">马上报名，免费试学</a>
    </div>
    <!-- End #lead-content -->

    <div id="lead-overlay"></div>

    <div id="lead-down">
            <span>
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
    </div>
    <!-- End #lead-down -->
</div>
<!-- End #lead -->

<div id="about">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h2 class="heading">少儿编程</h2>
            </div>
            <div class="col-md-8">
                <p>
                    Facebook创始人扎克伯格从六年级开始学习编程，打败人类围棋顶尖高手李世石的AlphaGo的缔造者、谷歌人工智能设计师杰米斯，也从8岁就开始喜欢上编程了。美国总统奥巴马连续两年亲自为活动“编程一小时”站台，支持孩子学习计算机编程。
                    在美国，在这样一群技术大牛带动之下的计算机编程浪潮里，学习编程已经成为少年甚至幼儿园小朋友的一种时尚之选。
                    <br>
                    <strong>在这个日益数字化的世界别让孩子因为无知而在数字化的世界里畏首畏脚，步履蹒跚！</strong>
                </p>
            </div>
        </div>
    </div>
</div>
<!-- End #about -->

<div id="education" class="background-alt">
    <h2 class="heading">为什么孩子要学习编程</h2>
    <div class="education-block">
        <h3>国际形式</h3>
        <h4></h4>
        <p>
            今年，全球将近2亿学生通过“一小时代码”活动进行编码。超过90％的美国家长希望将编程课添加到孩子的课程中。
            在今天的数字世界中，编程是数学和阅读的基本技能，但很少有孩子有机会学习，因为它很少在学校教授。
        </p>
    </div>
    <!-- End .education-block -->

    <div class="education-block">
        <h3>重要性</h3>
        <h4></h4>
        <ul>
            <li>
                编码推动创新。从自驾车到机器人辅助手术再到社交媒体，计算机科学正在革新我们生活的方方面面。编码是孩子需要学习的基本技能，这样他们可以引领这一时代 </li>
            <li>
                编码使孩子们有创意。他们可以创建真正令人惊叹的项目。
            </li>
            <li>
                编码建立孩子信心。孩子们能够创建项目并将其展示给家人和朋友，这种自信感是令人难以置信的。
            </li>
            <li>
                编码最好在早期学习。学习代码与学习第二语言相似。孩子越早接触到队列，循环和条件等基本编程主题，
                就越能深入地吸收这些概念。

            </li>
            <li>
                编码能引导其他领域的成功。学习编程可明显提高领域的学习能力和水平，如数学，阅读和英语。
            </li>
        </ul>
    </div>
    <!-- End .education-block -->
</div>
<!-- End #education -->

<div id="experience">
    <h2 class="heading">授课内容</h2>
    <div id="experience-timeline">
        <div>
            <h3>计算机常用英语词汇</h3>
            <h4>提升英语能力，认知英语重要性</h4>
            <p>
                精心挑选近200个常用计算机常用词汇，帮助孩子计算机知识专业化和情境化。
            </p>
        </div>

        <div>
            <h3>编程概念基础入门</h3>
            <h4>
                编程入门必修课程</h4>
            <p>
                通过类比、举例、演示等方法让孩子了解计算机程序是如何运行的。并熟悉一些经常使用术语的含义。
            </p>
        </div>

        <div>
            <h3>编程语言入门学习</h3>
            <h4>简单例子学习编程的核心思想</h4>
            <p>
                让孩子了解编程语言的基本特性，通过实例解决生活中的问题 不管以后孩子是否从事编程行业，编程时学到的逻辑思维、算法思维将会让孩子终身受益
            </p>
        </div>
        <div>
            <h3>成果</h3>
            <h4>让孩子完成一个属于自己的作品</h4>
            <p>
                编码建立信心。这是令人难以置信的方式让孩子们能够创建项目并将其展示给家人和朋友。
            </p>
        </div>
        <div>
            <h3>咏春拳</h3>
            <h4>请不要担心孩子身体问题</h4>
            <p>
                对着电脑沉迷游戏？眼睛不好？孩子可以学到正宗佛山咏春拳，矫正脊柱，防止侧弯和变形。劳逸结合，快乐学习。
            </p>
        </div>
    </div>
</div>
<!-- End #experience -->





<div id="skills">
    <h2 class="heading">学习到的技能</h2>
    <ul>
        <li>计算机文化基础</li>
        <li>Scratch编程</li>

        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>C语言编程</li>
        <li>Python编程</li>

    </ul>
</div>
<!-- End #skills -->

<div id="contact">
    <h2>联系我们</h2>
    <div id="contact-form">
        <div class="des">
            地址： 潍坊市东风街潍州路东北角西部证券四楼
            <br/>
            咨询电话：
            <a href="tel:17763181919">17763181919</a>

        </div>

    </div>
    <!-- End #contact-form -->
</div>
<!-- End #contact -->

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
    wx.config({
        debug: false,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: <?php echo $signPackage["timestamp"];?>,
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: [
            // 所有要调用的 API 都要加到这个列表中
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
        ]
    });
    wx.ready(function () {
        // 在这里调用 API
        wx.onMenuShareAppMessage({
            title: '别玩手机了，来学编程吧', // 分享标题
            desc: '潍坊市区少儿编程免费体验，了解一下！', // 分享描述
            link: 'http://edu.xiaobenup.com/node/1', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: '<?=$theme_url?>/programme/images/coding-for-kids-v3.png', // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

        wx.onMenuShareTimeline({
            title: '潍坊市区少儿编程免费体验，了解一下！', // 分享标题
            link: 'http://edu.xiaobenup.com/node/1', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: '<?=$theme_url?>/programme/images/coding-for-kids-v3.png', // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            }
        });
    });
</script>
</body>

</html>