<ul class="layui-nav">
    <?php foreach ($links as $key => $link):?>

        <li class="layui-nav-item">
            <?=l($link['link']['title'], $link['link']['link_path']);?>
            <?php if(!empty($link['below'])):?>
                <dl class="layui-nav-child">
                    <?php foreach ($link['below'] as $_key => $_link):?>
                        <dd>   <?=l($_link['link']['title'], $_link['link']['link_path']);?>
                        </dd>
                    <?php endforeach;?>
                </dl>
            <?php endif;?>
        </li>


    <?php endforeach;?>
</ul>