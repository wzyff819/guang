<div class="fh5co-loader"></div>

<div id="page">
    <nav class="fh5co-nav" role="navigation">
        <div class="top">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 text-right">
                        <p class="site"><a href="/" style="color:#828282">潍坊首家少儿编程培训-最美的光</a></p>
                        <p class="num">电话：<a  style="color:rgba(0, 0, 0, 0.6)" href="tel:17763181919">17763181919</a></p>

                    </div>
                </div>
            </div>
        </div>
        <div class="top-menu">
            <div class="container">
                <div class="row">
                    <div class="col-xs-2">
                        <div id="fh5co-logo"><a href="/"><i class="icon-study"></i>潍坊小孩子学编程</a></div>
                    </div>
                    <div class="col-xs-10 text-right menu-1">
                            <?php print render($primary_nav); ?>
                    </div>
                </div>

            </div>
        </div>
    </nav>

    <aside id="fh5co-hero">
        <div class="flexslider">
            <ul class="slides">
                <?php foreach($top as $item):?>
                <li style="background-image: url(<?=$item['img']?>);">
                    <div class="overlay-gradient"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center slider-text">
                                <div class="slider-text-inner">
                                    <h1><?=$item['title']?></h1>
                                    <h2><?=$item['subtitle']?></h2>
                                    <p><a class="btn btn-primary btn-lg" href="/contact">赶紧报名吧</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <?php endforeach;?>


            </ul>
        </div>
    </aside>

    <?php print render($courses);?>




    <div id="fh5co-testimonial" style="background-image: url(<?=$theme_path?>/images/school.jpg);">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
                    <h2><span>师资</span></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="row">
                        <div class="owl-carousel owl-carousel-fullwidth">

                            <?php foreach($teachers as $node):?>

                            <div class="item">
                                <a href="<?=$node->uri?>">
                                <div class="testimony-slide active text-center">
                                    <div class="user" style="background-image: url(<?=$node->img?>)"></div>
                                    <span><?=$node->title?></span>
                                    <blockquote>
                                        <p><?=$node->field_summery?></p>
                                    </blockquote>
                                </div>
                                </a>
                            </div>
                            <?php endforeach;?>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="fh5co-pricing" class="fh5co-bg-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
                    <h2>价格体系</h2>
                    <p>有多种课程价格供您选择</p>
                </div>
            </div>
            <?php foreach ($price as $p):?>
            <div class="row">
                <div class="pricing pricing--rabten">
                    <?php foreach ($p as $node):?>
                    <div class="col-md-4">
                        <div class="pricing__item">
                            <div class="wrap-price">
                                <h3 class="pricing__title"><?=$node['title']?></h3>
                            </div>
                            <div class="pricing__price">
                        <span class="pricing__anim pricing__anim--1">
								<span class="pricing__currency">¥</span><?=$node['price'];?>
                        </span>
                                <span class="pricing__anim pricing__anim--2">
								<span class="pricing__period"><?=$node['count']?>节</span>
                        </span>
                            </div>
                            <div class="wrap-price">
                                <ul class="pricing__feature-list">
                                    <?php foreach($node['des'] as $d):?>
                                        <li class="pricing__feature"><?=$d?></li>
                                    <?php endforeach;?>

                                </ul>
                                <button class="pricing__action" onclick=window.location.href="/contact">报名</button>
                            </div>
                        </div>
                    </div>
                    <?php endforeach;?>


                </div>
            </div>
            <?php endforeach;?>
        </div>
    </div>





    <footer id="fh5co-footer" role="contentinfo" style="background-image: url(<?=$theme_path?>/images/img_bg_4.jpg);">
        <div class="overlay"></div>
        <div class="container">

            <div class="row copyright">
                <div class="col-md-12 text-center">
                    <p>
                        &copy; 2018 最美的光-潍坊编程培训 版权所有
                    </p>
                    <p>
                        <small class="block">地址：东风街潍州路交叉口东北角西部证券四楼</small>
                    </p>
                    <p>
                        <small class="block">电话： <a href="tel:17763181919">17763181919</a></small>

                    </p>
                    <p>
                        <small class="block">技术支持 <a href="https://xiaobenup.com">小奔信息科技</a>
                    </p>
                </div>
            </div>

        </div>
    </footer>
</div>

<div class="gototop js-top">
    <a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
</div>
<?php render($page['content']['metatags']); ?>
