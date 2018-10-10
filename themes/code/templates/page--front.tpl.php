<header id="headerBox" class="header-box">
    <div class="header-content">
        <a href="/" class="header-logo" target="_blank">
            <div class="logo">
                <img src="<?php echo $image_path?>/logo.png" alt="潍坊少儿编程-翼橙编程培训">
            </div>
        </a>
        <div class="header-nav-box">
            <div class="head-tel">
                <span class="iconfont"></span>
                <span><?php echo $mobile;?></span>
            </div>
            <h2 class="head-title">
                <a href="/">翼橙-让编程更容易</a>
            </h2>
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


<section class="am-slider am-slider-default hp-banner-box" id="hpBanner" data-parrow="&#xe64e;" data-larrow="&#xe75b;">
    <ul class="am-slides clearfix">
        <li data-bg="<?php print $image_path; ?>/20170420090603172.jpg||<?php print $image_path; ?>/20170424112158228.jpg">
            <a href="/" class="banner-content1">
                <div class="ele-animation">
                    <span class="border-text animation fadeInDown">about YiCheng</span>
                    <p class="animation fadeInUp">编码改变世界<br>翼橙带你走向未来</p>
                    <small class="animation fadeInUp">Coding is changing the world
                        YiCheng helps you become the changer
                    </small>
                </div>
            </a>
        </li>
        <li data-bg="<?php print $image_path; ?>/20170507035453452.jpg||">
            <a href="/" class="banner-content2">
                <div class="ele-animation">
                    <span class="border-text animation fadeInDown">In the era of Internet, coding is the basic language you need to know Don’t let your children lag behind</span>
                    <p class="animation fadeInUp">互联网时代 编程为基础语言 <br>不要让孩子被社会淘汰</p>
                    <small class="animation fadeInUp"></small>
                </div>
            </a>
        </li>

    </ul>
    <div class="slider-mask">
        <img src="<?php print $theme_url; ?>/images/loader.gif" alt="加载中......"/>
    </div>
</section>

<section class="hp-fast-signup">
    <div class="fast-signup-box">
        <div class="fast-signup clearfix">
            <div class="link-btn-box">
                <a href="/contact">
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-computer"></use>
                        </svg>
                        <div class="btn-content">
                            <small>Signup for Our Courses</small>
                            <span>潍坊少儿编程报名</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="link-btn-box">
                <a href="/contact">
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-compass"></use>
                        </svg>
                        <div class="btn-content">
                            <small>Summercamp signup</small>
                            <span>潍坊成人编程报名</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>


<section class="hp-why-study">
    <div class="page-common-title">
        <em>Why teenagers learn programming</em>
        <h3>为什么要在青少年时期学习编程</h3>
    </div>
    <div class="study-advan-content">
        <ul class="advan-list clearfix">
            <li>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-laptop"></use>
                    </svg>
                    <span class="advan-brief-box">
								<h5>基础技能</h5>
								<p>
									在21世纪，少儿编程之于孩子如驾驶之于成人。
                                </p>
							</span>
                </div>
            </li>
            <li>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-brainstorming"></use>
                    </svg>
                    <span class="advan-brief-box">
								<h5>逻辑思维</h5>
								<p>
									少儿编程毋庸置疑的天然优势
                                </p>
							</span>
                </div>
            </li>
            <li>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-chronometer"></use>
                    </svg>
                    <span class="advan-brief-box">
								<h5>把握时机</h5>
								<p>
									响应政府号如，提高升学竞争力，成为一条通往名校的全新赛道						</p>
							</span>
                </div>
            </li>
            <li>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-organization"></use>
                    </svg>
                    <span class="advan-brief-box">
								<h5>提升成绩</h5>
								<p>
									英语数学的完美结合，成就兴趣之上的全科王
							</span>
                </div>
            </li>
            <li>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-worldwide"></use>
                    </svg>
                    <span class="advan-brief-box">
								<h5>国际接轨</h5>
								<p>
									在国外，小学就开始学习编程，父母应该让孩子提早学习编程						</p>
							</span>
                </div>
            </li>
            <li>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-tie"></use>
                    </svg>
                    <span class="advan-brief-box">
								<h5>闪耀未来</h5>
								<p>
									科技在飞速发展，在未来编程不再是程序员的专属，从事任何工作都必须要会编程</p>
							</span>
                </div>
            </li>
        </ul>
    </div>
</section>


<section class="hp-about-box">
    <div class="about-content clearfix">
        <div class="about-brief-box">
            <span class="en-title">About march</span>
            <h4>关于码趣</h4>
            <p>
                翼橙(YiCheng)，是潍坊首家少儿编程培训机构，由互联网从业十年的团队创办。有丰富的开发和培训经验。
                致力于让潍坊青少年认识到英语和数学的重要性，学会真正的编程技能，扫清未来的道路上因不会编程而遇到的阻碍！
            </p>
            <ul class="about-data-list clearfix list-paddingleft-2">
                <li><p><span class="iconfont"></span> 创客能力</p></li>
                <li><p><span class="iconfont"></span> 编程精神</p></li>
                <li><p><span class="iconfont"></span> 逻辑思维</p></li>
                <li><p><span class="iconfont"></span> 动手操作</p></li>
            </ul>
            <div class="more-curse-btn">
                <a href="/about"
                   class="more-btn">了解更多</a>
            </div>
        </div>
        <div class="about-img">
            <img src="http://www.codingmarch.com/uploadfile/2017/0420/20170420094130309.png" alt="关于码趣">
        </div>
    </div>

</section>


<?php print render($courses); ?>

<!-- case -->
<section class="hp-case-box">
    <div class="case-content">
        <div class="case-list clearfix" id="partner_list">
            <div>
                <a href="javascript:;">
                    <div class="portr-img">
								<span class="jqthumb">
									<img src="<?php echo $image_path;?>/20170420084036157.jpg"
                                         alt="Steve Jobs"/>
								</span>
                    </div>
                    <div class="case-brief">
                        <h6>Steve Jobs</h6>
                        <p>Apple创始人13岁开始编程</p>
                    </div>
                </a>
            </div>
            <div>
                <a href="javascript:;">
                    <div class="portr-img">
								<span class="jqthumb">
									<img src="<?php echo $image_path;?>/20170420084323952.jpg"
                                         alt="Marl Zuckerberg"/>
								</span>
                    </div>
                    <div class="case-brief">
                        <h6>Marl Zuckerberg</h6>
                        <p>Facebook创始人10岁开始编程</p>
                    </div>
                </a>
            </div>
            <div>
                <a href="javascript:;">
                    <div class="portr-img">
								<span class="jqthumb">
									<img src="<?php echo $image_path;?>/20170420084423378.jpg"
                                         alt="Sergey Brin"/>
								</span>
                    </div>
                    <div class="case-brief">
                        <h6>Sergey Brin</h6>
                        <p>Google联合创始人8岁开始编程</p>
                    </div>
                </a>
            </div>
            <div>
                <a href="javascript:;">
                    <div class="portr-img">
								<span class="jqthumb">
									<img src="<?php echo $image_path;?>/20170420085924905.jpg"
                                         alt="bill Gates "/>
								</span>
                    </div>
                    <div class="case-brief">
                        <h6>bill Gates </h6>
                        <p>微软创始人13岁开始编程</p>
                    </div>
                </a>
            </div>
            <div>
                <a href="javascript:;">
                    <div class="portr-img">
								<span class="jqthumb">
									<img src="<?php echo $image_path;?>/20170607114323785.jpg"
                                         alt="Elon Musk"/>
								</span>
                    </div>
                    <div class="case-brief">
                        <h6>Elon Musk</h6>
                        <p>Spacex创始人9岁开始学习编程</p>
                    </div>
                </a>
            </div>
            <div>
                <a href="javascript:;">
                    <div class="portr-img">
								<span class="jqthumb">
									<img src="<?php echo $image_path;?>/20170607114957292.jpeg"
                                         alt="DemisHassabis"/>
								</span>
                    </div>
                    <div class="case-brief">
                        <h6>DemisHassabis</h6>
                        <p>AlphaGo创始人8岁开始学习编程</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
<!-- case end -->


<footer class="footer-box clearfix">
    <div class="footer-about">
        <div class="about-content">
            <div class="footer-title">
                <h4>翼橙少儿编程教育</h4>
            </div>
            <div class="about-brief">
                <div class="logo-box">
                    <img src="http://www.codingmarch.com/uploadfile/2017/0419/20170419095315864.png" alt="http://www.codingmarch.com">
                </div>
                <p>
                    小奔科技有限公司旗下的翼橙编程教育，致力于提高潍坊青少年编程认知，并教会他们如何用程序思考和解决问题。</p>
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
                <li>微信：<?php print $wechat;?></li>

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
            <p>Copyright © 2018 翼橙编程培训 All Rights Reserved.</p>
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
