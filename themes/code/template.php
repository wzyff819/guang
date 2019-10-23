<?php

/**
 * @file
 * The primary PHP file for this theme.
 */

function code_menu_tree__primary(array &$variables) {
    return '<ul>' . $variables['tree'] . '</ul>';
}

function code_preprocess_html(&$var)
{
    $var['theme_url'] = file_create_url(drupal_get_path('theme', 'code'));

}

function code_links__system_main_menu($variables)
{
    $links = (array) $variables['links'];
    $attributes = (array) $variables['attributes'];
    $heading = $variables['heading'];
    global $language_url;
    $output = '';
    if (count($links) > 0) {

        // Treat the heading first if it is present to prepend it to the
        // list of links.
        if (!empty($heading)) {
            if (is_string($heading)) {

                // Prepare the array that will be used when the passed heading
                // is a string.
                $heading = array(
                    'text' => $heading,
                    // Set the default level of the heading.
                    'level' => 'h2',
                );
            }
            $output .= '<' . $heading['level'];
            if (!empty($heading['class'])) {
                $output .= drupal_attributes(array(
                    'class' => $heading['class'],
                ));
            }
            $output .= '>' . check_plain($heading['text']) . '</' . $heading['level'] . '>';
        }
        $output .= '<ul' . drupal_attributes($attributes) . '>';
        $num_links = count($links);
        $i = 1;
        foreach ($links as $key => $link) {
            $class = array(
                $key,
            );

            // Add first, last and active classes to the list of links to help out
            // themers.
            if ($i == 1) {
                $class[] = 'first';
            }
            if ($i == $num_links) {
                $class[] = 'last';
            }
            if (isset($link['href']) && ($link['href'] == $_GET['q'] || $link['href'] == '<front>' && drupal_is_front_page()) && (empty($link['language']) || $link['language']->language == $language_url->language)) {
                $class[] = 'curr';
            }
            $output .= '<li' . drupal_attributes(array(
                    'class' => $class,
                )) . '>';
            if (isset($link['href'])) {

                // Pass in $link as $options, they share the same keys.
                $output .= l($link['title'], $link['href'], $link);
            }
            elseif (!empty($link['title'])) {

                // Some links are actually not links, but we wrap these in <span> for
                // adding title and class attributes.
                if (empty($link['html'])) {
                    $link['title'] = check_plain($link['title']);
                }
                $span_attributes = '';
                if (isset($link['attributes'])) {
                    $span_attributes = drupal_attributes($link['attributes']);
                }
                $output .= '<span' . $span_attributes . '>' . $link['title'] . '</span>';
            }
            $i++;
            $output .= "</li>\n";
        }
        $output .= '</ul>';
    }
    return $output;
}


function code_preprocess_page(&$var)
{

    $var['theme_path'] = drupal_get_path('theme', 'code');
    $var['theme_url'] = file_create_url(drupal_get_path('theme', 'code'));
    $var['address'] = '潍坊奎文区新华路东风街丹桂里商务楼南楼1020';
    $var['wechat'] = '17763181919';
    $var['mobile'] = '王老师：<a href="tel:17763181919">17763181919</a>';
    $var['mobile_zhang'] = '张老师：<a href="tel:17306363713">17306363713</a>';
    $var['image_path'] = file_create_url('public://images');

    if(drupal_is_front_page())
    {
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


    }



}