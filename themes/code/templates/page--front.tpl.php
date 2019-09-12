<header id="headerBox" class="header-box">
    <div class="header-content">
        <a href="/" class="header-logo" target="_blank">
            <div class="logo">
                <img src="<?php echo $image_path?>/logo.png" alt="潍坊少儿编程,潍坊少儿编程培训,潍坊编程教育">
            </div>
        </a>
        <div class="header-nav-box">
            <div class="head-tel">
                <span class="iconfont"></span>
                <span><?php echo $mobile_zhang;?></span>
            </div>
            <h1 class="head-title">
                <a href="/">潍坊翼橙少儿编程教育，培养6-18岁青少年精英</a>
            </h1>
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
                    <span class="border-text animation fadeInDown">潍坊翼橙程序设计</span>
                    <p class="animation fadeInUp">携手创造孩子未来<br/>
专注6-15岁青少年编程教育平台</p>
                </div>
            </a>
        </li>
        <li data-bg="<?php print $image_path; ?>/20170507035453452.jpg||">
            <a href="/" class="banner-content2">
                <div class="ele-animation">
                    <span class="border-text animation fadeInDown">潍坊翼橙青少年编程</span>
                    <p class="animation fadeInUp">正经学编程，实力创未来</p>
                    <small class="animation fadeInUp">从第一个hello,world程序
                        到编程语言特性，到最终的数据结构和算法，教会孩子如何思考问题、如何主动学习。</small>
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
        <h3>为什么要在中小学时期学习编程</h3>
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
									在21世纪，编程将成为必备技能。
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
								<h5>计算思维</h5>
								<p>
									编程对提高逻辑思维和计算思维能力有毋庸置疑的优势。
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
								<h5>升学机遇</h5>
								<p>
									响应政府号召，提高升学竞争力，一条通往名校的全新赛道						</p>
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
									科技飞速发展，未来编程不再是程序员的专属，从事任何工作都必须要有良好的计算思维。</p>
							</span>
                </div>
            </li>
        </ul>
    </div>
</section>


<section class="hp-about-box">
    <div class="about-content clearfix">
        <div class="about-brief-box">
            <span class="en-title">About YiCheng</span>
            <h4>关于翼橙</h4>
            <p>
                翼橙(YiCheng)程序设计发展促进中心，<strong>潍坊首家少儿编程教育机构</strong>，由互联网从业十余年的团队创办，联合北京理工大学计算机学院编制少儿编程精品课程，有丰富的开发和培训经验。
                致力于为潍坊孩子提供优质的、与国际前沿接轨的计算机编程学习与创新教育，不让孩子在21世纪掉队！
            </p>
            <ul class="about-data-list clearfix list-paddingleft-2">
                <li><p><span class="iconfont"></span>创客精神</p></li>
                <li><p><span class="iconfont"></span>英语、数学提高</p></li>
                <li><p><span class="iconfont"></span>计算思维</p></li>
                <li><p><span class="iconfont"></span>动手操作</p></li>
            </ul>
            <div class="more-curse-btn">
                <a href="/about"
                   class="more-btn">了解更多</a>
            </div>
        </div>
        <div class="about-img">
            <img src="<?php print $image_path;?>/20170420094130309.png" alt="关于潍坊翼橙少儿编程">
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



<?php print theme('help');?>

<footer class="footer-box clearfix">
    <div class="footer-about">
        <div class="about-content">
            <div class="footer-title">
                <h4>翼橙教学理念</h4>
            </div>
            <div class="about-brief">
                <p>
                    用专业赢得尊重，
                    用智慧培养学生，
                    用代码塑造精英。
             </p>
            </div>
        </div>
    </div>
    <div class="footer-content">
        <div class="footer-contact clearfix">
            <div class="footer-title">
                <h4>联系</h4>
            </div>
            <ul class="contact-mode clearfix">
            <li><?php print $mobile;?></li>

                <li>地址：<?php print $address;?></li>

            </ul>

        </div>
        <div class="footer-follow">
            <div class="footer-title">
                <h4>扫一扫咨询</h4>
            </div>

            <div class="follow-rq-code">
                <img src="<?php print $image_path?>/wzy.png"/>
            </div>

        </div>
        <div class="footer-copy-box">
            <p>Copyright © 2019 潍坊翼橙程序设计发展促进中心 All Rights Reserved.</p>
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
<style>
.layui-layer-btn {text-align:center}
</style>
<script>
// layer.msg('翼橙少儿编程暑假班招生开始啦！了解一下？', {
//   time: 0 //不自动关闭
//   ,btn: ['必须了解啊', '稍后再说吧']
//   ,yes: function(index){
//     layer.close(index);
//     window.location.href = "/node/22"
//   }
// });
</script>
<?php render($page['content']['metatags']); ?>
