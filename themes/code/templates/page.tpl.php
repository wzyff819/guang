<header id="headerBox" class="header-box">
    <div class="header-content">
        <a href="/" class="header-logo" >
            <div class="logo">
                <img src="<?php echo $image_path?>/logo.png" alt="潍坊少儿编程-翼橙编程培训">
            </div>
        </a>
        <div class="header-nav-box">
            <div class="head-tel">
                <span class="iconfont"></span>
                <span><?php print $mobile;?></span>
            </div>

            <nav class="header-nav" style="max-height: 293px;">
                <?php print theme('links__system_main_menu', array(
                    'links' => $main_menu,
                    'attributes' => array(
                        'id' => 'navList',
                        'class' => array('nav-list'),
                    ),

                )); ?>


            </nav>
            <button type="button" id="navBtn">
                <span class="one"></span>
                <span class="two"></span>
                <span class="three"></span>
            </button>
        </div>
    </div>
</header>


<!-- banner -->
<section class="common-banner-box">
    <div class="banner-bg jqthumb">
        <img src="<?php print $image_path;?>/common_banner_bg.jpg" alt="" />
    </div>
    <div class="banner-text">
        <div>
            <span>Coding Yi Cheng</span>
            <em>学编程，更聪明，学得好，来翼橙。</em>
        </div>
    </div>
</section>
<!-- banner end -->
<?php if ($action_links): ?>
    <ul class="action-links">
        <?php print render($action_links); ?>
    </ul>
<?php endif; ?>
<?php print str_replace('{file}', $image_path, render($page['content'])); ?>

<?php print theme('help');?>

<footer class="footer-box clearfix">
    <div class="footer-about">
        <div class="about-content">
            <div class="footer-title">
                <h4>翼橙少儿编程</h4>
            </div>
            <div class="about-brief">

                <p>
                    潍坊翼橙少儿编程教育，致力于提高潍坊青少年编程认知，并教会他们如何用程序思考和解决问题。</p>
            </div>
        </div>
    </div>
    <div class="footer-content">
        <div class="footer-contact clearfix">
            <div class="footer-title">
                <h4>联系我们</h4>
            </div>
            <ul class="contact-mode clearfix">
                <li>地址：<?php print $address;?></li>
                <li>电话：<?php print $mobile;?></li>

            </ul>

        </div>
        <div class="footer-follow">
            <div class="footer-title">
                <h4>微信二维码</h4>
            </div>

            <div class="follow-rq-code">
                <img src="<?php print $image_path?>/wzy.png"/>
            </div>

        </div>
        <div class="footer-copy-box">
            <p>Copyright © 2018 翼橙少儿编程教育 All Rights Reserved.</p>
        </div>
    </div>
</footer>
<div class="common-alter-mask" id="altetMask">
    <div class="alter-content">
        <img src="<?php print $image_path?>/wzy.png"/>
        <span class="iconfont close-btn">&times;</span>
    </div>
</div>
<div class="page-mask"></div>
<?php render($page['content']['metatags']); ?>
