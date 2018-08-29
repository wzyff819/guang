<?php

/**
 * @file
 * The primary PHP file for this theme.
 */

function guang_menu_tree__primary(array &$variables) {
    return '<ul>' . $variables['tree'] . '</ul>';
}

function guang_preprocess_html(&$var)
{
    $var['theme_url'] = file_create_url(drupal_get_path('theme', 'guang'));

}


function guang_preprocess_page(&$var)
{

    $var['theme_path'] = drupal_get_path('theme', 'guang');
    $var['theme_url'] = file_create_url(drupal_get_path('theme', 'guang'));

    if(drupal_is_front_page())
    {
        drupal_set_title("潍坊首家少儿编程培训机构，欢迎咨询");
        $image_path = file_create_url('public://images');

        $var['top']  = [
            [
              'title' => '',
                'subtitle' => '',
              'img' => $image_path.'/mingren.jpg',
            ],
            [
              'title' => '',
                'subtitle' => '',

                'img' => $image_path.'/hour.png',
            ],
        ];


        $var['courses'] =   ['#theme' => 'courses', '#courses' => load_courses()];
        $var['teachers'] =   load_teachers();
        $var['price'] = load_price();

    }



}