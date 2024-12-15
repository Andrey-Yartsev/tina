<?php

@mkdir(__DIR__.'/avatar');
$r = file_get_contents(__DIR__.'/../../src/data/messages.json');
$r = json_decode($r, JSON_OBJECT_AS_ARRAY);
foreach ($r as $v) {
    file_put_contents(__DIR__.'/avatar/'.$v['nick'].'.png', file_get_contents($v['img']));
    print '.';
}
rename(__DIR__.'/img', __DIR__.'/../../public/img/avatar');
print 'done';
