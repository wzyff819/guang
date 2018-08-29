<div id="fh5co-staff">
<div class="container">

    <?php foreach ($teachers as $t):?>
    <div class="row">
        <?php foreach ($t as $node):?>
        <div class="col-md-3 text-center">
            <div class="staff">
                <a href="<?=$node->uri;?>"><div class="staff-img" style="background-image: url(<?=$node->img;?>);">
                    </div></a>
                <h3><a href="<?=$node->uri;?>"><?=$node->title;?></a></h3>
                <p><?=$node->field_summery;?></p>
            </div>
        </div>
        <?php endforeach;?>

    </div>


    <?php endforeach;?>
</div>
</div>
