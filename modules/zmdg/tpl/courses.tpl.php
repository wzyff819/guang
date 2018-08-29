<div id="fh5co-course">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
                <h2>课程</h2>
                <p>一张一弛，文武之道。编程和咏春，让孩子有聪明的大脑和强健的体魄。</p>
            </div>
        </div>
        <div class="row">
            <?php foreach ($courses as $node):?>
                <div class="col-md-6">
                    <div class="course">
                        <a href="<?=$node->uri?>" class="course-img" style="background-image: url(<?=$node->img?>);">
                        </a>
                        <div class="desc">
                            <h3><a href="<?=$node->uri?>"><?=$node->title?></a></h3>
                            <p><?=$node->field_summery?></p>
                            <span><a href="<?=$node->uri?>" class="btn btn-primary btn-sm btn-course">我要学</a></span>
                        </div>
                    </div>
                </div>

            <?php endforeach;?>
        </div>
    </div>
</div>