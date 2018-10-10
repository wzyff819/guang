<!-- team -->
<section class="about-page-team">
    <div class="page-common-title">
        <em>Our Team</em>
        <h3>师资力量</h3>
    </div>
    <div class="team-list-box">
        <ul class="team-list clearfix">
            <?php foreach ($teachers as $node):?>
            <li>
                <div>
                    <a href="<?php echo $node->uri;?>" class="team-img">
								<span class="jqthumb">
									<img src="<?php echo $node->img;?>" alt="潍坊少儿编程-<?php print $node->title;?>" />
								</span>
                        <div class="img-mask">
                            <span class="iconfont">&#xe610;</span>
                        </div>
                    </a>
                    <div class="team-brief-box">
                        <h4><?php print $node->title;?><span><?php echo $node->field_role;?></span></h4>
                        <p><?php echo $node->field_summery;?></p>
                    </div>
                </div>
            </li>
            <?php endforeach;?>


        </ul>
    </div>
</section>
<!-- team end -->