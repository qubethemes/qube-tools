<?php

namespace Qube_Tools\Includes\Modules\Demo;


use Qube_Tools\Includes\Modules\Demo\API\Importer_API;

class Demo
{


    public function __construct()
    {
        new Ajax();
        new Importer_API();

    }


}
